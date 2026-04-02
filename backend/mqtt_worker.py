import paho.mqtt.client as mqtt
import requests

BASE_URL = "http://127.0.0.1:8000"

# Mapeo: topic MQTT -> configuración para FastAPI
SENSORS = {
    # -------- Ventanas --------
    "EQ7/HomeX/ventana1": {
        "url": f"{BASE_URL}/ventana1/create",
        "field": "abierta",
        "type": bool,
    },
    "EQ7/HomeX/ventana2": {
        "url": f"{BASE_URL}/ventana2/create",
        "field": "abierta",
        "type": bool,
    },
    "EQ7/HomeX/ventana3": {
        "url": f"{BASE_URL}/ventana3/create",
        "field": "abierta",
        "type": bool,
    },

    # -------- Botón / Elevador --------
    "EQ7/HomeX/boton_elevador": {
        "url": f"{BASE_URL}/boton_elevador/create",
        "field": "presionado",
        "type": bool,
    },
    "EQ7/HomeX/elevador": {
        "url": f"{BASE_URL}/elevador/create",
        "field": "arriba",
        "type": bool,
    },

    # -------- Focos --------
    "EQ7/HomeX/foco_atico": {
        "url": f"{BASE_URL}/foco_atico/create",
        "field": "prendido",
        "type": bool,
    },
    "EQ7/HomeX/foco_pb": {
        "url": f"{BASE_URL}/foco_pb/create",
        "field": "ptaje_prendido",
        "type": int,
    },
    "EQ7/HomeX/foco_sotano": {
        "url": f"{BASE_URL}/foco_sotano/create",
        "field": "prendido",
        "type": bool,
    },

    # -------- Ambiente --------
    "EQ7/HomeX/temperatura": {
        "url": f"{BASE_URL}/temperatura/create",
        "field": "temperatura_celsius",
        "type": float,
    },
    "EQ7/HomeX/presion": {
        "url": f"{BASE_URL}/presion/create",
        "field": "presion_HPa",
        "type": float,
    },
    "EQ7/HomeX/lluvia": {
        "url": f"{BASE_URL}/lluvia/create",
        "field": "mojado",
        "type": bool,
    },
    "EQ7/HomeX/luz": {
        "url": f"{BASE_URL}/luz/create",
        "field": "ptaje_luz",
        "type": int,
    },

    # -------- Movimiento / Puerta --------
    "EQ7/HomeX/movimiento_atico": {
        "url": f"{BASE_URL}/movimiento_atico/create",
        "field": "movimiento",
        "type": bool,
    },
    "EQ7/HomeX/puerta": {
        "url": f"{BASE_URL}/puerta/create",
        "field": "abierta",
        "type": bool,
    },

    # -------- NFC --------
    "EQ7/HomeX/nfc_coche": {
        "url": f"{BASE_URL}/nfc_coche/create",
        "field": "id_nfc",
        "type": str,
    },
    "EQ7/HomeX/nfc_puerta": {
        "url": f"{BASE_URL}/nfc_puerta/create",
        "field": "id_nfc",
        "type": str,
    },
}


def parse_payload(raw: str, expected_type):
    """Convierte el payload MQTT a tipo Python apropiado."""
    raw = raw.strip()

    if expected_type is float:
        return float(raw)
    if expected_type is int:
        return int(raw)
    if expected_type is bool:
        lower = raw.lower()
        if lower in ("1", "true", "on", "open", "arriba"):
            return True
        if lower in ("0", "false", "off", "closed", "abajo"):
            return False
        return raw != "0"
    return raw


def on_connect(client, userdata, flags, reason_code, properties=None):
    print("Conectado al broker MQTT, código:", reason_code)
    for topic in SENSORS.keys():
        print("Suscribiéndose a:", topic)
        client.subscribe(topic)


def on_message(client, userdata, msg):
    topic = msg.topic
    payload = msg.payload.decode()

    print(f"\nMensaje en {topic}: {payload}")

    config = SENSORS.get(topic)
    if not config:
        print("Topic no configurado:", topic)
        return

    try:
        valor = parse_payload(payload, config["type"])
        data = {config["field"]: valor}

        print("POST", config["url"], "JSON:", data)
        resp = requests.post(config["url"], json=data, timeout=2)
        print("Respuesta API:", resp.status_code, resp.text)

    except Exception as e:
        print("Error procesando mensaje:", e)


def main():
    client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
    client.on_connect = on_connect
    client.on_message = on_message

    print("Conectando a test.mosquitto.org:1883")
    client.connect("test.mosquitto.org", 1883, 60)
    client.loop_forever()


if __name__ == "__main__":
    main()