from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel
import paho.mqtt.client as mqtt

from dtos import (
    CreateTemperaturaRequest, TemperaturaDTO,
    CreatePresionRequest, PresionDTO,
    CreateLuzRequest, LuzDTO,
    CreateLluviaRequest, LluviaDTO,
    CreateMovimientoAticoRequest, MovimientoAticoDTO,
    CreatePuertaRequest, PuertaDTO,
    CreateNFCCocheRequest, NFCCocheDTO,
    CreateNFCPuertaRequest, NFCPuertaDTO,
    CreateVentana1Request, Ventana1DTO,
    CreateVentana2Request, Ventana2DTO,
    CreateVentana3Request, Ventana3DTO,
    CreateFocoAticoRequest, FocoAticoDTO,
    CreateFocoPBRequest, FocoPBDTO,
    CreateFocoSotanoRequest, FocoSotanoDTO,
    CreateBotonElevadorRequest, BotonElevadorDTO,
    CreateElevadorRequest, ElevadorDTO,
    ControlIntRequest
)

from repositories import (
    TemperaturaRepository,
    PresionRepository,
    LuzRepository,
    LluviaRepository,
    MovimientoAticoRepository,
    PuertaRepository,
    NFCCocheRepository,
    NFCPuertaRepository,
    Ventana1Repository,
    Ventana2Repository,
    Ventana3Repository,
    FocoAticoRepository,
    FocoPBRepository,
    FocoSotanoRepository,
    BotonElevadorRepository,
    ElevadorRepository
)

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


MQTT_BROKER = "test.mosquitto.org"
MQTT_PORT = 1883

mqtt_client = mqtt.Client()

def connect_mqtt():
    try:
        mqtt_client.connect(MQTT_BROKER, MQTT_PORT, 60)
        mqtt_client.loop_start()
        print(f"MQTT conectado a {MQTT_BROKER}:{MQTT_PORT}")
    except Exception as e:
        print("No se pudo conectar al broker MQTT, continuando sin MQTT:", e)

@app.on_event("startup")
def startup_event():
    connect_mqtt()

@app.on_event("shutdown")
def shutdown_event():
    mqtt_client.loop_stop()
    mqtt_client.disconnect()


# ---------------------- TEMPERATURA ----------------------

@app.post("/temperatura/create")
def create_temperatura(dto:CreateTemperaturaRequest):
    repo = TemperaturaRepository()
    repo.insert_data(dto.temperatura_celsius)
    return {"message":"Data inserted"}

@app.get("/temperatura/list")
def get_temperaturas()->list[TemperaturaDTO]:
    repo = TemperaturaRepository()
    return repo.get_data()


# ---------------------- PRESION ----------------------

@app.post("/presion/create")
def create_presion(dto:CreatePresionRequest):
    repo = PresionRepository()
    repo.insert_data(dto.presion_HPa)
    return {"message":"Data inserted"}

@app.get("/presion/list")
def get_presion()->list[PresionDTO]:
    repo = PresionRepository()
    return repo.get_data()


# ---------------------- LUZ ----------------------

@app.post("/luz/create")
def create_luz(dto:CreateLuzRequest):
    repo = LuzRepository()
    repo.insert_data(dto.ptaje_luz)
    return {"message":"Data inserted"}

@app.get("/luz/list")
def get_luz()->list[LuzDTO]:
    repo = LuzRepository()
    return repo.get_data()


# ---------------------- LLUVIA ----------------------

@app.post("/lluvia/create")
def create_lluvia(dto:CreateLluviaRequest):
    repo = LluviaRepository()
    repo.insert_data(dto.mojado)
    return {"message":"Data inserted"}

@app.get("/lluvia/list")
def get_lluvia()->list[LluviaDTO]:
    repo = LluviaRepository()
    return repo.get_data()


# ---------------------- MOVIMIENTO ÁTICO ----------------------

@app.post("/movimiento_atico/create")
def create_movimiento(dto:CreateMovimientoAticoRequest):
    repo = MovimientoAticoRepository()
    repo.insert_data(dto.movimiento)
    return {"message":"Data inserted"}

@app.get("/movimiento_atico/list")
def get_movimiento()->list[MovimientoAticoDTO]:
    repo = MovimientoAticoRepository()
    return repo.get_data()


# ---------------------- PUERTA ----------------------

@app.post("/puerta/create")
def create_puerta(dto:CreatePuertaRequest):
    repo = PuertaRepository()
    repo.insert_data(dto.abierta)
    return {"message":"Data inserted"}

@app.get("/puerta/list")
def get_puerta()->list[PuertaDTO]:
    repo = PuertaRepository()
    return repo.get_data()

# ---------------------- NFC COCHE ----------------------

@app.post("/nfc_coche/create")
def create_nfc_coche(dto:CreateNFCCocheRequest):
    repo = NFCCocheRepository()
    repo.insert_data(dto.id_nfc)
    return {"message":"Data inserted"}

@app.get("/nfc_coche/list")
def get_nfc_coche()->list[NFCCocheDTO]:
    repo = NFCCocheRepository()
    return repo.get_data()


# ---------------------- NFC PUERTA ----------------------

@app.post("/nfc_puerta/create")
def create_nfc_puerta(dto:CreateNFCPuertaRequest):
    repo = NFCPuertaRepository()
    repo.insert_data(dto.id_nfc)
    return {"message":"Data inserted"}

@app.get("/nfc_puerta/list")
def get_nfc_puerta()->list[NFCPuertaDTO]:
    repo = NFCPuertaRepository()
    return repo.get_data()


# ---------------------- VENTANAS ----------------------

@app.post("/ventana1/create")
def create_ventana1(dto:CreateVentana1Request):
    repo = Ventana1Repository()
    repo.insert_data(dto.abierta)
    return {"message":"Data inserted"}

@app.get("/ventana1/list")
def get_ventana1()->list[Ventana1DTO]:
    repo = Ventana1Repository()
    return repo.get_data()


@app.post("/ventana2/create")
def create_ventana2(dto:CreateVentana2Request):
    repo = Ventana2Repository()
    repo.insert_data(dto.abierta)
    return {"message":"Data inserted"}

@app.get("/ventana2/list")
def get_ventana2()->list[Ventana2DTO]:
    repo = Ventana2Repository()
    return repo.get_data()


@app.post("/ventana3/create")
def create_ventana3(dto:CreateVentana3Request):
    repo = Ventana3Repository()
    repo.insert_data(dto.abierta)
    return {"message":"Data inserted"}

@app.get("/ventana3/list")
def get_ventana3()->list[Ventana3DTO]:
    repo = Ventana3Repository()
    return repo.get_data()


# ---------------------- FOCOS ----------------------

@app.post("/foco_atico/create")
def create_foco_atico(dto:CreateFocoAticoRequest):
    repo = FocoAticoRepository()
    repo.insert_data(dto.prendido)
    return {"message":"Data inserted"}

@app.get("/foco_atico/list")
def get_foco_atico()->list[FocoAticoDTO]:
    repo = FocoAticoRepository()
    return repo.get_data()


@app.post("/foco_pb/create")
def create_foco_pb(dto:CreateFocoPBRequest):
    repo = FocoPBRepository()
    repo.insert_data(dto.ptaje_prendido)
    return {"message":"Data inserted"}

@app.get("/foco_pb/list")
def get_foco_pb()->list[FocoPBDTO]:
    repo = FocoPBRepository()
    return repo.get_data()


@app.post("/foco_sotano/create")
def create_foco_sotano(dto:CreateFocoSotanoRequest):
    repo = FocoSotanoRepository()
    repo.insert_data(dto.prendido)
    return {"message":"Data inserted"}

@app.get("/foco_sotano/list")
def get_foco_sotano()->list[FocoSotanoDTO]:
    repo = FocoSotanoRepository()
    return repo.get_data()


# ---------------------- BOTON ELEVADOR ----------------------

@app.post("/boton_elevador/create")
def create_boton_elevador(dto:CreateBotonElevadorRequest):
    repo = BotonElevadorRepository()
    repo.insert_data(dto.presionado)
    return {"message":"Data inserted"}

@app.get("/boton_elevador/list")
def get_boton_elevador()->list[BotonElevadorDTO]:
    repo = BotonElevadorRepository()
    return repo.get_data()


# ---------------------- ELEVADOR ----------------------

@app.post("/elevador/create")
def create_elevador(dto:CreateElevadorRequest):
    repo = ElevadorRepository()
    repo.insert_data(dto.arriba)
    return {"message":"Data inserted"}

@app.get("/elevador/list")
def get_elevador()->list[ElevadorDTO]:
    repo = ElevadorRepository()
    return repo.get_data()


# ---------------------- RESET DB ----------------------

@app.post("/admin/reset")
def reset_database():
    import mysql.connector

    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="Vaquero88214%",
        database="casa"
    )
    cursor = conn.cursor()

    try:
        cursor.execute("SET FOREIGN_KEY_CHECKS = 0;")
        tablas = [
            "temperatura",
            "presion",
            "luz",
            "lluvia",
            "movimiento_atico",
            "puerta",
            "nfc_coche",
            "nfc_puerta",
            "ventana_1",
            "ventana_2",
            "ventana_3",
            "foco_atico",
            "foco_pb",
            "foco_sotano",
            "boton_elevador",
            "elevador"
        ]

        for nombre in tablas:
            cursor.execute(f"TRUNCATE TABLE {nombre};")

        cursor.execute("SET FOREIGN_KEY_CHECKS = 1;")
        conn.commit()
        return {"message": "Base de datos reseteada correctamente"}

    finally:
        cursor.close()
        conn.close()



# ---------------------- CONTROL VIA MQTT ----------------------

@app.post("/control/ventana{num}")
def control_ventana(num: int, req: ControlIntRequest):
    if num not in (1, 2, 3):
        raise HTTPException(status_code=400, detail="Ventana invalida (solo 1, 2 o 3)")

    if req.valor not in (0, 1, 2):
        raise HTTPException(status_code=400, detail="valor debe ser 0, 1 o 2")

    topic = f"EQ7/HomeX/control/ventana{num}"
    mqtt_client.publish(topic, str(req.valor))
    return {"message": f"Comando enviado a {topic}", "valor": req.valor}


@app.post("/control/foco_atico")
def control_foco_atico(req: ControlIntRequest):
    if req.valor not in (0, 1, 2):
        raise HTTPException(status_code=400, detail="valor debe ser 0, 1 o 2")

    topic = "EQ7/HomeX/control/foco_atico"
    mqtt_client.publish(topic, str(req.valor))
    return {"message": f"Comando enviado a {topic}", "valor": req.valor}


@app.post("/control/foco_pb")
def control_foco_pb(req: ControlIntRequest):
    if req.valor not in (0, 1, 2):
        raise HTTPException(status_code=400, detail="valor debe ser 0, 1 o 2")

    topic = "EQ7/HomeX/control/foco_pb"
    mqtt_client.publish(topic, str(req.valor))
    return {"message": f"Comando enviado a {topic}", "valor": req.valor}


@app.post("/control/foco_sotano")
def control_foco_sotano(req: ControlIntRequest):
    if req.valor not in (0, 1, 2):
        raise HTTPException(status_code=400, detail="valor debe ser 0, 1 o 2")
    
    topic = "EQ7/HomeX/control/foco_sotano"
    mqtt_client.publish(topic, str(req.valor))
    return {"message": f"Comando enviado a {topic}", "valor": req.valor}


@app.post("/control/puerta")
def control_puerta(req: ControlIntRequest):
    if req.valor != 1:
        raise HTTPException(status_code=400, detail="valor debe ser 1 para abrir la puerta")

    topic = "EQ7/HomeX/control/puerta"
    mqtt_client.publish(topic, str(req.valor))
    return {"message": f"Comando enviado a {topic}", "valor": req.valor}


@app.post("/control/elevador")
def control_elevador(req: ControlIntRequest):
    if req.valor not in (1, 2):
        raise HTTPException(status_code=400, detail="valor debe ser 1 para presionar el boton")

    topic = "EQ7/HomeX/control/elevador"
    mqtt_client.publish(topic, str(req.valor))
    return {"message": f"Comando enviado a {topic}", "valor": req.valor}