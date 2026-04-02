from typing import Optional
from pydantic import BaseModel
from datetime import datetime

# ---------- Botón / Elevador ----------

class CreateBotonElevadorRequest(BaseModel):
    presionado: bool

class BotonElevadorDTO(BaseModel):
    id: int
    presionado: bool
    fecha: datetime


class CreateElevadorRequest(BaseModel):
    arriba: bool

class ElevadorDTO(BaseModel):
    id: int
    arriba: bool
    fecha: datetime


# ---------- Focos ----------

class CreateFocoAticoRequest(BaseModel):
    prendido: bool

class FocoAticoDTO(BaseModel):
    id: int
    prendido: bool
    fecha: datetime


class CreateFocoPBRequest(BaseModel):
    ptaje_prendido: int

class FocoPBDTO(BaseModel):
    id: int
    ptaje_prendido: int
    fecha: datetime


class CreateFocoSotanoRequest(BaseModel):
    prendido: bool

class FocoSotanoDTO(BaseModel):
    id: int
    prendido: bool
    fecha: datetime


# ---------- Ambiente (temperatura, presión, luz, lluvia) ----------

class CreateTemperaturaRequest(BaseModel):
    temperatura_celsius: float

class TemperaturaDTO(BaseModel):
    id: int
    temperatura_celsius: float
    fecha: datetime


class CreatePresionRequest(BaseModel):
    presion_HPa: float

class PresionDTO(BaseModel):
    id: int
    presion_HPa: float
    fecha: datetime


class CreateLluviaRequest(BaseModel):
    mojado: bool

class LluviaDTO(BaseModel):
    id: int
    mojado: bool
    fecha: datetime


class CreateLuzRequest(BaseModel):
    ptaje_luz: int

class LuzDTO(BaseModel):
    id: int
    ptaje_luz: int
    fecha: datetime


# ---------- Movimiento / Puerta----------

class CreateMovimientoAticoRequest(BaseModel):
    movimiento: bool

class MovimientoAticoDTO(BaseModel):
    id: int
    movimiento: bool
    fecha: datetime


class CreatePuertaRequest(BaseModel):
    abierta: bool

class PuertaDTO(BaseModel):
    id: int
    abierta: bool
    fecha: datetime
    
# ---------- NFC ----------

class CreateNFCCocheRequest(BaseModel):
    id_nfc: str

class NFCCocheDTO(BaseModel):
    id: int
    id_nfc: str
    fecha: datetime
    nombre: Optional[str] = None
    apellido: Optional[str] = None

class CreateNFCPuertaRequest(BaseModel):
    id_nfc: str

class NFCPuertaDTO(BaseModel):
    id: int
    id_nfc: str
    fecha: datetime
    nombre: Optional[str] = None
    apellido: Optional[str] = None


# ---------- Ventanas ----------

class CreateVentana1Request(BaseModel):
    abierta: bool

class Ventana1DTO(BaseModel):
    id: int
    abierta: bool
    fecha: datetime


class CreateVentana2Request(BaseModel):
    abierta: bool

class Ventana2DTO(BaseModel):
    id: int
    abierta: bool
    fecha: datetime


class CreateVentana3Request(BaseModel):
    abierta: bool

class Ventana3DTO(BaseModel):
    id: int
    abierta: bool
    fecha: datetime

# ---------- ControlIntRequest ----------

class ControlIntRequest(BaseModel):
    valor: int