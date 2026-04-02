from datetime import datetime
import mysql.connector
from mysql.connector import Error


class BaseRepository:
    def __init__(self):
        self.config = {
            "host": "localhost",
            "user": "root",
            "password": "Vaquero88214%",
            "database": "casa",
            "port": 3306
        }

    def get_connection(self):
        return mysql.connector.connect(**self.config)


# ---------- BOTON ELEVADOR ----------

class BotonElevadorRepository(BaseRepository):

    def insert_data(self, presionado: bool):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO boton_elevador (presionado) VALUES (%s)"
            cursor.execute(query, (presionado,))
            connection.commit()
        except Error as e:
            print(f"Error en boton_elevador: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "SELECT id, presionado, fecha FROM boton_elevador"
            cursor.execute(query)
            for id, presionado, fecha in cursor.fetchall():
                valores.append({
                    "id": id,
                    "presionado": presionado,
                    "fecha": fecha
                })
            return valores
        except Error as e:
            print(f"Error en get boton_elevador: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()


# ---------- ELEVADOR ----------

class ElevadorRepository(BaseRepository):

    def insert_data(self, arriba: bool):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO elevador (arriba) VALUES (%s)"
            cursor.execute(query, (arriba,))
            connection.commit()
        except Error as e:
            print(f"Error en elevador: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "SELECT id, arriba, fecha FROM elevador"
            cursor.execute(query)
            for id, arriba, fecha in cursor.fetchall():
                valores.append({
                    "id": id,
                    "arriba": arriba,
                    "fecha": fecha
                })
            return valores
        except Error as e:
            print(f"Error en get elevador: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()


# ---------- FOCO ATICO ----------

class FocoAticoRepository(BaseRepository):

    def insert_data(self, prendido: bool):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO foco_atico (prendido) VALUES (%s)"
            cursor.execute(query, (prendido,))
            connection.commit()
        except Error as e:
            print(f"Error en foco_atico: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "SELECT id, prendido, fecha FROM foco_atico"
            cursor.execute(query)
            for id, prendido, fecha in cursor.fetchall():
                valores.append({
                    "id": id,
                    "prendido": prendido,
                    "fecha": fecha
                })
            return valores
        except Error as e:
            print(f"Error en get foco_atico: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()


# ---------- FOCO PB ----------

class FocoPBRepository(BaseRepository):

    def insert_data(self, ptaje_prendido: int):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO foco_pb (ptaje_prendido) VALUES (%s)"
            cursor.execute(query, (ptaje_prendido,))
            connection.commit()
        except Error as e:
            print(f"Error en foco_pb: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "SELECT id, ptaje_prendido, fecha FROM foco_pb"
            cursor.execute(query)
            for id, ptaje_prendido, fecha in cursor.fetchall():
                valores.append({
                    "id": id,
                    "ptaje_prendido": ptaje_prendido,
                    "fecha": fecha
                })
            return valores
        except Error as e:
            print(f"Error en get foco_pb: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()


# ---------- FOCO SOTANO ----------

class FocoSotanoRepository(BaseRepository):

    def insert_data(self, prendido: bool):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO foco_sotano (prendido) VALUES (%s)"
            cursor.execute(query, (prendido,))
            connection.commit()
        except Error as e:
            print(f"Error en foco_sotano: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "SELECT id, prendido, fecha FROM foco_sotano"
            cursor.execute(query)
            for id, prendido, fecha in cursor.fetchall():
                valores.append({
                    "id": id,
                    "prendido": prendido,
                    "fecha": fecha
                })
            return valores
        except Error as e:
            print(f"Error en get foco_sotano: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()


# ---------- TEMPERATURA ----------

class TemperaturaRepository(BaseRepository):

    def insert_data(self, temperatura_celsius: float):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO temperatura (temperatura_celsius) VALUES (%s)"
            cursor.execute(query, (temperatura_celsius,))
            connection.commit()
        except Error as e:
            print(f"Error en temperatura: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            cursor.execute("SELECT id, temperatura_celsius, fecha FROM temperatura")
            for id, temp, fecha in cursor.fetchall():
                valores.append({
                    "id": id,
                    "temperatura_celsius": temp,
                    "fecha": fecha
                })
            return valores
        except Error as e:
            print(f"Error en get temperatura: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()


# ---------- PRESION ----------

class PresionRepository(BaseRepository):

    def insert_data(self, presion_HPa: float):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO presion (presion_HPa) VALUES (%s)"
            cursor.execute(query, (presion_HPa,))
            connection.commit()
        except Error as e:
            print(f"Error en presion: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            cursor.execute("SELECT id, presion_HPa, fecha FROM presion")
            for id, presion, fecha in cursor.fetchall():
                valores.append({
                    "id": id,
                    "presion_HPa": presion,
                    "fecha": fecha
                })
            return valores
        except Error as e:
            print(f"Error en get presion: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()


# ---------- LUZ ----------

class LuzRepository(BaseRepository):

    def insert_data(self, ptaje_luz: int):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO luz (ptaje_luz) VALUES (%s)"
            cursor.execute(query, (ptaje_luz,))
            connection.commit()
        except Error as e:
            print(f"Error en luz: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            cursor.execute("SELECT id, ptaje_luz, fecha FROM luz")
            for id, luz, fecha in cursor.fetchall():
                valores.append({
                    "id": id,
                    "ptaje_luz": luz,
                    "fecha": fecha
                })
            return valores
        except Error as e:
            print(f"Error en get luz: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()


# ---------- LLUVIA ----------

class LluviaRepository(BaseRepository):

    def insert_data(self, mojado: bool):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO lluvia (mojado) VALUES (%s)"
            cursor.execute(query, (mojado,))
            connection.commit()
        except Error as e:
            print(f"Error en lluvia: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            cursor.execute("SELECT id, mojado, fecha FROM lluvia")
            for id, mojado, fecha in cursor.fetchall():
                valores.append({
                    "id": id,
                    "mojado": mojado,
                    "fecha": fecha
                })
            return valores
        except Error as e:
            print(f"Error en get lluvia: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()




# ---------- MOVIMIENTO ----------

class MovimientoAticoRepository(BaseRepository):

    def insert_data(self, movimiento: bool):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO movimiento_atico (movimiento) VALUES (%s)"
            cursor.execute(query, (movimiento,))
            connection.commit()
        except Error as e:
            print(f"Error en movimiento_atico: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            cursor.execute("SELECT id, movimiento, fecha FROM movimiento_atico")
            for id, mov, fecha in cursor.fetchall():
                valores.append({
                    "id": id,
                    "movimiento": mov,
                    "fecha": fecha
                })
            return valores
        except Error as e:
            print(f"Error en get movimiento_atico: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()


# ---------- PUERTA ----------

class PuertaRepository(BaseRepository):

    def insert_data(self, abierta: bool):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO puerta (abierta) VALUES (%s)"
            cursor.execute(query, (abierta,))
            connection.commit()
        except Error as e:
            print(f"Error en puerta: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            cursor.execute("SELECT id, abierta, fecha FROM puerta")
            for id, abierta, fecha in cursor.fetchall():
                valores.append({
                    "id": id,
                    "abierta": abierta,
                    "fecha": fecha
                })
            return valores
        except Error as e:
            print(f"Error en get puerta: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

# ---------- NFC COCHE ----------

class NFCCocheRepository(BaseRepository):

    def insert_data(self, id_nfc: str):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO nfc_coche (id_nfc) VALUES (%s)"
            cursor.execute(query, (id_nfc,))
            connection.commit()
        except Error as e:
            print(f"Error en nfc_coche: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = """
                SELECT c.id,
                       c.id_nfc,
                       c.fecha,
                       p.nombre,
                       p.apellido
                FROM nfc_coche c
                LEFT JOIN personas p ON c.id_nfc = p.id_nfc
            """
            cursor.execute(query)
            for id, id_nfc, fecha, nombre, apellido in cursor.fetchall():
                valores.append({
                    "id": id,
                    "id_nfc": id_nfc,
                    "fecha": fecha,
                    "nombre": nombre,
                    "apellido": apellido
                })
            return valores
        except Error as e:
            print(f"Error en get nfc_coche: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()


# ---------- NFC PUERTA ----------

class NFCPuertaRepository(BaseRepository):

    def insert_data(self, id_nfc: str):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO nfc_puerta (id_nfc) VALUES (%s)"
            cursor.execute(query, (id_nfc,))
            connection.commit()
        except Error as e:
            print(f"Error en nfc_puerta: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = """
                SELECT np.id,
                       np.id_nfc,
                       np.fecha,
                       p.nombre,
                       p.apellido
                FROM nfc_puerta np
                LEFT JOIN personas p ON np.id_nfc = p.id_nfc
            """
            cursor.execute(query)
            for id, id_nfc, fecha, nombre, apellido in cursor.fetchall():
                valores.append({
                    "id": id,
                    "id_nfc": id_nfc,
                    "fecha": fecha,
                    "nombre": nombre,
                    "apellido": apellido
                })
            return valores
        except Error as e:
            print(f"Error en get nfc_puerta: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()


# ---------- VENTANAS ----------

class Ventana1Repository(BaseRepository):

    def insert_data(self, abierta: bool):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO ventana_1 (abierta) VALUES (%s)"
            cursor.execute(query, (abierta,))
            connection.commit()
        except Error as e:
            print(f"Error en ventana_1: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            cursor.execute("SELECT id, abierta, fecha FROM ventana_1")
            for id, abierta, fecha in cursor.fetchall():
                valores.append({
                    "id": id,
                    "abierta": abierta,
                    "fecha": fecha
                })
            return valores
        except Error as e:
            print(f"Error en get ventana_1: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()


class Ventana2Repository(BaseRepository):

    def insert_data(self, abierta: bool):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO ventana_2 (abierta) VALUES (%s)"
            cursor.execute(query, (abierta,))
            connection.commit()
        except Error as e:
            print(f"Error en ventana_2: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            cursor.execute("SELECT id, abierta, fecha FROM ventana_2")
            for id, abierta, fecha in cursor.fetchall():
                valores.append({
                    "id": id,
                    "abierta": abierta,
                    "fecha": fecha
                })
            return valores
        except Error as e:
            print(f"Error en get ventana_2: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()


class Ventana3Repository(BaseRepository):

    def insert_data(self, abierta: bool):
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            query = "INSERT INTO ventana_3 (abierta) VALUES (%s)"
            cursor.execute(query, (abierta,))
            connection.commit()
        except Error as e:
            print(f"Error en ventana_3: {e}")
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    def get_data(self):
        valores = []
        try:
            connection = self.get_connection()
            cursor = connection.cursor()
            cursor.execute("SELECT id, abierta, fecha FROM ventana_3")
            for id, abierta, fecha in cursor.fetchall():
                valores.append({
                    "id": id,
                    "abierta": abierta,
                    "fecha": fecha
                })
            return valores
        except Error as e:
            print(f"Error en get ventana_3: {e}")
            return valores
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()