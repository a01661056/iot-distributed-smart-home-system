"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Tipos de datos que regresa tu API
interface TemperaturaDTO {
  id: number;
  temperatura_celsius: number;
  fecha: string;
}

interface PresionDTO {
  id: number;
  presion_HPa: number;
  fecha: string;
}

interface LuzDTO {
  id: number;
  ptaje_luz: number;
  fecha: string;
}

interface LluviaDTO {
  id: number;
  mojado: boolean;
  fecha: string;
}


interface PuertaDTO {
  id: number;
  abierta: boolean;
  fecha: string;
}

interface MovimientoAticoDTO {
  id: number;
  movimiento: boolean;
  fecha: string;
}

interface Ventana1DTO {
  id: number;
  abierta: boolean;
  fecha: string;
}

interface Ventana2DTO {
  id: number;
  abierta: boolean;
  fecha: string;
}

interface Ventana3DTO {
  id: number;
  abierta: boolean;
  fecha: string;
}

interface FocoAticoDTO {
  id: number;
  prendido: boolean;
  fecha: string;
}

interface FocoPBDTO {
  id: number;
  ptaje_prendido: number;
  fecha: string;
}

interface FocoSotanoDTO {
  id: number;
  prendido: boolean;
  fecha: string;
}

interface BotonElevadorDTO {
  id: number;
  presionado: boolean;
  fecha: string;
}

interface ElevadorDTO {
  id: number;
  arriba: boolean;
  fecha: string;
}

interface NFCCocheDTO {
  id: number;
  id_nfc: string;
  fecha: string;
  nombre: string | null;
  apellido: string | null;
}

interface NFCPuertaDTO {
  id: number;
  id_nfc: string;
  fecha: string;
  nombre: string | null;
  apellido: string | null;
}

// Sensores que se pueden seleccionar en el menú
type SensorKey =
  | "movimiento"
  | "ventanas"
  | "focos"
  | "elevador"
  | "nfc";

export default function Home() {
  const [selectedSensor, setSelectedSensor] = useState<SensorKey>("nfc");

  const [temperaturas, setTemperaturas] = useState<TemperaturaDTO[]>([]);
  const [presiones, setPresiones] = useState<PresionDTO[]>([]);
  const [luces, setLuces] = useState<LuzDTO[]>([]);
  const [lluvias, setLluvias] = useState<LluviaDTO[]>([]);
  const [puerta, setPuerta] = useState<PuertaDTO[]>([]);
  const [movimientoAtico, setMovimientoAtico] = useState<MovimientoAticoDTO[]>([]);

  const [ventana1, setVentana1] = useState<Ventana1DTO[]>([]);
  const [ventana2, setVentana2] = useState<Ventana2DTO[]>([]);
  const [ventana3, setVentana3] = useState<Ventana3DTO[]>([]);

  const [focoAtico, setFocoAtico] = useState<FocoAticoDTO[]>([]);
  const [focoPB, setFocoPB] = useState<FocoPBDTO[]>([]);
  const [focoSotano, setFocoSotano] = useState<FocoSotanoDTO[]>([]);

  const [botonElevador, setBotonElevador] = useState<BotonElevadorDTO[]>([]);
  const [elevador, setElevador] = useState<ElevadorDTO[]>([]);

  const [nfcCoche, setNfcCoche] = useState<NFCCocheDTO[]>([]);
  const [nfcPuerta, setNfcPuerta] = useState<NFCPuertaDTO[]>([]);
  const [lastUnknownCocheId, setLastUnknownCocheId] = useState<number | null>(null);
  const [lastUnknownPuertaId, setLastUnknownPuertaId] = useState<number | null>(null);

  async function cargarTemperatura() {
    try {
      const resp = await axios.get<TemperaturaDTO[]>(
        "http://localhost:8000/temperatura/list"
      );
      setTemperaturas(resp.data);
    } catch (error) {
      console.error("Error al obtener temperatura", error);
    }
  }

  async function cargarPresion() {
    try {
      const resp = await axios.get<PresionDTO[]>(
        "http://localhost:8000/presion/list"
      );
      setPresiones(resp.data);
    } catch (error) {
      console.error("Error al obtener presion", error);
    }
  }

  async function cargarLuz() {
    try {
      const resp = await axios.get<LuzDTO[]>("http://localhost:8000/luz/list");
      setLuces(resp.data);
    } catch (error) {
      console.error("Error al obtener luz", error);
    }
  }

  async function cargarLluvia() {
    try {
      const resp = await axios.get<LluviaDTO[]>(
        "http://localhost:8000/lluvia/list"
      );
      setLluvias(resp.data);
    } catch (error) {
      console.error("Error al obtener lluvia", error);
    }
  }


  async function cargarPuerta() {
    try {
      const resp = await axios.get<PuertaDTO[]>(
        "http://localhost:8000/puerta/list"
      );
      setPuerta(resp.data);
    } catch (error) {
      console.error("Error al obtener puerta", error);
    }
  }

  async function cargarMovimientoAtico() {
    try {
      const resp = await axios.get<MovimientoAticoDTO[]>(
        "http://localhost:8000/movimiento_atico/list"
      );
      setMovimientoAtico(resp.data);
    } catch (error) {
      console.error("Error al obtener movimiento atico", error);
    }
  }

  async function cargarVentana1() {
    try {
      const resp = await axios.get<Ventana1DTO[]>(
        "http://localhost:8000/ventana1/list"
      );
      setVentana1(resp.data);
    } catch (error) {
      console.error("Error al obtener ventana1", error);
    }
  }

  async function cargarVentana2() {
    try {
      const resp = await axios.get<Ventana2DTO[]>(
        "http://localhost:8000/ventana2/list"
      );
      setVentana2(resp.data);
    } catch (error) {
      console.error("Error al obtener ventana2", error);
    }
  }

  async function cargarVentana3() {
    try {
      const resp = await axios.get<Ventana3DTO[]>(
        "http://localhost:8000/ventana3/list"
      );
      setVentana3(resp.data);
    } catch (error) {
      console.error("Error al obtener ventana3", error);
    }
  }

  async function cargarFocoAtico() {
    try {
      const resp = await axios.get<FocoAticoDTO[]>(
        "http://localhost:8000/foco_atico/list"
      );
      setFocoAtico(resp.data);
    } catch (error) {
      console.error("Error al obtener foco atico", error);
    }
  }

  async function cargarFocoPB() {
    try {
      const resp = await axios.get<FocoPBDTO[]>(
        "http://localhost:8000/foco_pb/list"
      );
      setFocoPB(resp.data);
    } catch (error) {
      console.error("Error al obtener foco pb", error);
    }
  }

  async function cargarFocoSotano() {
    try {
      const resp = await axios.get<FocoSotanoDTO[]>(
        "http://localhost:8000/foco_sotano/list"
      );
      setFocoSotano(resp.data);
    } catch (error) {
      console.error("Error al obtener foco sotano", error);
    }
  }

  async function cargarBotonElevador() {
    try {
      const resp = await axios.get<BotonElevadorDTO[]>(
        "http://localhost:8000/boton_elevador/list"
      );
      setBotonElevador(resp.data);
    } catch (error) {
      console.error("Error al obtener boton elevador", error);
    }
  }

  async function cargarElevador() {
    try {
      const resp = await axios.get<ElevadorDTO[]>(
        "http://localhost:8000/elevador/list"
      );
      setElevador(resp.data);
    } catch (error) {
      console.error("Error al obtener elevador", error);
    }
  }

  async function cargarNFCCoche() {
    try {
      const resp = await axios.get<NFCCocheDTO[]>(
        "http://localhost:8000/nfc_coche/list"
      );
      setNfcCoche(resp.data);
      const unknowns = resp.data.filter((item) => !item.nombre);
      if (unknowns.length > 0) {
        setLastUnknownCocheId(unknowns[unknowns.length - 1].id);
      } else {
        setLastUnknownCocheId(null);
      }
    } catch (error) {
      console.error("Error al obtener nfc coche", error);
    }
  }

  async function cargarNFCPuerta() {
    try {
      const resp = await axios.get<NFCPuertaDTO[]>(
        "http://localhost:8000/nfc_puerta/list"
      );
      setNfcPuerta(resp.data);
      const unknowns = resp.data.filter((item) => !item.nombre);
      if (unknowns.length > 0) {
        setLastUnknownPuertaId(unknowns[unknowns.length - 1].id);
      } else {
        setLastUnknownPuertaId(null);
      }
    } catch (error) {
      console.error("Error al obtener nfc puerta", error);
    }
  }

  // Cargar todo cada cierto tiempo para tener el dashboard vivo
  useEffect(() => {
    function cargarTodo() {
      cargarTemperatura();
      cargarPresion();
      cargarLuz();
      cargarLluvia();
      cargarPuerta();
      cargarMovimientoAtico();
      cargarVentana1();
      cargarVentana2();
      cargarVentana3();
      cargarFocoAtico();
      cargarFocoPB();
      cargarFocoSotano();
      cargarBotonElevador();
      cargarElevador();
      cargarNFCCoche();
      cargarNFCPuerta();
    }

    cargarTodo();
    const intervalId = setInterval(cargarTodo, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Utilidades para obtener el último valor de cada serie
  function ultimo<T extends { fecha: string }>(lista: T[]): T | null {
    if (!lista || lista.length === 0) return null;
    return lista[lista.length - 1];
  }

  const ultimaTemp = ultimo(temperaturas);
  const ultimaPresion = ultimo(presiones);
  const ultimaLuz = ultimo(luces);
  const ultimaLluvia = ultimo(lluvias);
  const ultimaPuerta = ultimo(puerta);
  const ultimoMovimiento = ultimo(movimientoAtico);

  const ultimaVentana1 = ultimo(ventana1);
  const ultimaVentana2 = ultimo(ventana2);
  const ultimaVentana3 = ultimo(ventana3);

  const ultimoFocoAtico = ultimo(focoAtico);
  const ultimoFocoPB = ultimo(focoPB);
  const ultimoFocoSotano = ultimo(focoSotano);

  const ultimoBotonElevador = ultimo(botonElevador);
  const ultimoElevador = ultimo(elevador);

  const ultimoNFCCoche = ultimo(nfcCoche);
  const ultimoNFCPuerta = ultimo(nfcPuerta);

  // --- Helpers para enviar comandos de control al backend ---
  async function enviarControl(url: string, valor: number) {
    try {
      await axios.post(url, { valor });
    } catch (error) {
      console.error("Error al enviar comando de control", url, valor, error);
    }
  }

  function controlVentana(num: number, valor: number) {
    enviarControl(`http://localhost:8000/control/ventana${num}`, valor);
  }

  function controlFocoAtico(valor: number) {
    enviarControl("http://localhost:8000/control/foco_atico", valor);
  }

  function controlFocoPB(valor: number) {
    enviarControl("http://localhost:8000/control/foco_pb", valor);
  }

  function controlFocoSotano(valor: number) {
    enviarControl("http://localhost:8000/control/foco_sotano", valor);
  }

  function controlPuerta(valor: number) {
    enviarControl("http://localhost:8000/control/puerta", valor);
  }

  function controlElevador() {
    enviarControl("http://localhost:8000/control/elevador", 1);
  }

  function controlElevadorSubir() {
    enviarControl("http://localhost:8000/control/elevador", 2);
  }

  async function resetDatabase() {
    try {
      await axios.post("http://localhost:8000/admin/reset");
      alert("Base de datos reseteada");
    } catch (error) {
      console.error("Error al resetear la base de datos", error);
      alert("Error al resetear la base de datos");
    }
  }

  // Según el sensor seleccionado, definimos qué datos y configuración usa la gráfica
  function renderChart() {

    if (selectedSensor === "ventanas") {
  const ventana1Compact = compactByMinute(ventana1, (v) => (v.abierta ? "1" : "0"));
  const ventana2Compact = compactByMinute(ventana2, (v) => (v.abierta ? "1" : "0"));
  const ventana3Compact = compactByMinute(ventana3, (v) => (v.abierta ? "1" : "0"));
  const puertaCompact = compactByMinute(puerta, (p) => (p.abierta ? "1" : "0"));

  return (
    <SensorCard
      title="Puerta y ventanas"
          subtitle="Estado de la puerta y las 3 ventanas"
          currentValue={
            ultimaVentana1 || ultimaVentana2 || ultimaVentana3 || ultimaPuerta
              ? `${
                  ultimaPuerta
                    ? ultimaPuerta.abierta
                      ? "Puerta abierta"
                      : "Puerta cerrada"
                    : "Puerta --"
                } · ${
                  ultimaVentana1
                    ? ultimaVentana1.abierta
                      ? "V1 abierta"
                      : "V1 cerrada"
                    : "V1 --"
                } · ${
                  ultimaVentana2
                    ? ultimaVentana2.abierta
                      ? "V2 abierta"
                      : "V2 cerrada"
                    : "V2 --"
                } · ${
                  ultimaVentana3
                    ? ultimaVentana3.abierta
                      ? "V3 abierta"
                      : "V3 cerrada"
                    : "V3 --"
                }`
              : "--"
          }
        >
          <div className="w-full h-full flex flex-col gap-3">
            <SmallLabel>Ventana Ático 1</SmallLabel>
            <BooleanLineChart
              data={ventana1Compact.map((v) => ({
                ...v,
                valor: v.abierta ? 1 : 0,
              }))}
              dataKey="valor"
              labelOn="Abierta"
              labelOff="Cerrada"
            />
            <SmallLabel>Ventana Ático 2</SmallLabel>
            <BooleanLineChart
              data={ventana2Compact.map((v) => ({
                ...v,
                valor: v.abierta ? 1 : 0,
              }))}
              dataKey="valor"
              labelOn="Abierta"
              labelOff="Cerrada"
            />
            <SmallLabel>Ventana PB</SmallLabel>
            <BooleanLineChart
              data={ventana3Compact.map((v) => ({
                ...v,
                valor: v.abierta ? 1 : 0,
              }))}
              dataKey="valor"
              labelOn="Abierta"
              labelOff="Cerrada"
            />
            <SmallLabel>Puerta</SmallLabel>
            <BooleanLineChart
              data={puertaCompact.map((p) => ({
                ...p,
                valor: p.abierta ? 1 : 0,
              }))}
              dataKey="valor"
              labelOn="Abierta"
              labelOff="Cerrada"
            />
          </div>
        </SensorCard>
      );
    }

    if (selectedSensor === "focos") {
  const focoAticoCompact = compactByMinute(focoAtico, (f) => (f.prendido ? "1" : "0"));
  const focoSotanoCompact = compactByMinute(focoSotano, (f) => (f.prendido ? "1" : "0"));

  return (
    <SensorCard
      title="Focos"
          subtitle="Estado de iluminación por zona"
          currentValue={
            `${ultimoFocoAtico
              ? ultimoFocoAtico.prendido
                ? "Ático encendido"
                : "Ático apagado"
              : "Ático --"
            } · ${
              ultimoFocoPB
                ? `PB ${ultimoFocoPB.ptaje_prendido}%`
                : "PB --%"
            } · ${
              ultimoFocoSotano
                ? ultimoFocoSotano.prendido
                  ? "Sótano encendido"
                  : "Sótano apagado"
                : "Sótano --"
            }`
          }
        >
          <div className="w-full h-full flex flex-col gap-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col gap-2">
                <SmallLabel>Foco ático (on/off)</SmallLabel>
                <BooleanLineChart
                  data={focoAticoCompact.map((f) => ({
                    ...f,
                    valor: f.prendido ? 1 : 0,
                  }))}
                  dataKey="valor"
                  labelOn="On"
                  labelOff="Off"
                />
              </div>
              <div className="flex flex-col gap-2">
                <SmallLabel>Foco PB (% intensidad)</SmallLabel>
                <div className="bg-slate-950/70 border border-slate-800 rounded-xl px-3 py-2 flex flex-col items-center justify-center gap-1">
                  <span className="text-[11px] text-slate-400">Valor actual</span>
                  <span className="text-xl font-semibold text-sky-400">
                    {ultimoFocoPB ? `${ultimoFocoPB.ptaje_prendido}%` : "--"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <SmallLabel>Foco sótano (on/off)</SmallLabel>
                <BooleanLineChart
                  data={focoSotanoCompact.map((f) => ({
                    ...f,
                    valor: f.prendido ? 1 : 0,
                  }))}
                  dataKey="valor"
                  labelOn="On"
                  labelOff="Off"
                />
              </div>
            </div>
          </div>
        </SensorCard>
      );
    }

    if (selectedSensor === "elevador") {
  const elevadorCompact = compactByMinute(elevador, (e) => (e.arriba ? "1" : "0"));
  const botonElevadorCompact = compactByMinute(
    botonElevador,
    (b) => (b.presionado ? "1" : "0")
  );

  // Historial de presiones del botón (solo cuando presionado = true)
  const eventosBoton = botonElevadorCompact
    .filter((b) => b.presionado)
    .slice(-12)
    .reverse();

      return (
        <SensorCard
          title="Elevador"
          subtitle="Estado del elevador y botón"
          currentValue={
            ultimoElevador
              ? ultimoElevador.arriba
                ? "Elevador en PB"
                : "Elevador en sótano"
              : "--"
          }
        >
          <div className="w-full h-full flex flex-col gap-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col gap-2">
                <SmallLabel>Posición del elevador</SmallLabel>
                <ElevatorLineChart
                  data={elevadorCompact.map((e) => ({
                    ...e,
                    valor: e.arriba ? 1 : 0,
                  }))}
                  dataKey="valor"
                />
              </div>
              <div className="flex flex-col gap-2">
                <SmallLabel>Historial llamadas</SmallLabel>
                <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-3 overflow-auto text-xs">
                  {eventosBoton.length === 0 ? (
                    <p className="text-slate-500 text-[11px]">
                      Aún no se ha registrado ninguna presión del botón.
                    </p>
                  ) : (
                    <ul className="space-y-1">
                      {eventosBoton.map((item) => (
                        <li
                          key={item.id}
                          className="flex justify-between gap-2 border-b border-slate-800/60 pb-1 last:border-b-0"
                        >
                          <span className="text-slate-200 font-mono">
                            Botón presionado
                          </span>
                          <span className="text-slate-500">
                            {formatHora(item.fecha)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </SensorCard>
      );
    }

    if (selectedSensor === "nfc") {
      const ultimoCocheNoRegistrado = ultimoNFCCoche && !ultimoNFCCoche.nombre;
      const ultimoPuertaNoRegistrado = ultimoNFCPuerta && !ultimoNFCPuerta.nombre;
      const mostrarAlertaNFC = !!(ultimoCocheNoRegistrado || ultimoPuertaNoRegistrado);
      return (
        <SensorCard
          title="Accesos NFC"
          subtitle="Registros recientes de coche y puerta"
          currentValue={
            ultimoNFCCoche || ultimoNFCPuerta
              ? "Mostrando últimos accesos"
              : "--"
          }
        >
          <div className="w-full flex flex-col gap-2">
            {mostrarAlertaNFC && (
              <div className="rounded-lg border border-amber-500/60 bg-amber-500/10 px-3 py-2 text-[11px] text-amber-100">
                Intento de acceso con NFC no registrado detectado.
              </div>
            )}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-2 overflow-auto">
                <SmallLabel>Entradas coche</SmallLabel>
                <ul className="mt-1 space-y-1">
                  {agruparNFCPorMinuto(nfcCoche)
                    .slice(-12)
                    .reverse()
                    .map((item) => (
                      <li key={item.id} className="flex justify-between gap-2">
                        <span className="font-mono text-slate-200">
                          {item.nombre
                            ? `${item.nombre} ${item.apellido ?? ""}`.trim()
                            : `NFC no registrado (${item.id_nfc})`}
                        </span>
                        <span className="text-slate-500">
                          {formatHora(item.fecha)}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-2 overflow-auto">
                <SmallLabel>Entradas puerta</SmallLabel>
                <ul className="mt-1 space-y-1">
                  {agruparNFCPorMinuto(nfcPuerta)
                      .slice(-12)
                      .reverse()
                      .map((item) => (
                      <li key={item.id} className="flex justify-between gap-2">
                        <span className="font-mono text-slate-200">
                          {item.nombre
                            ? `${item.nombre} ${item.apellido ?? ""}`.trim()
                            : `NFC no registrado (${item.id_nfc})`}
                        </span>
                        <span className="text-slate-500">
                          {formatHora(item.fecha)}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </SensorCard>
      );
    }


    if (selectedSensor === "movimiento") {
  const movimientoCompact = compactByMinute(
    movimientoAtico,
    (m) => (m.movimiento ? "1" : "0")
  );

  const eventosMovimiento = movimientoCompact
    .filter((m) => m.movimiento)
    .slice(-12)
    .reverse();

      return (
        <SensorCard
          title="Movimiento ático"
          subtitle="Detecciones recientes"
          currentValue={
            ultimoMovimiento
              ? ultimoMovimiento.movimiento
                ? "Movimiento detectado"
                : "Sin movimiento"
              : "--"
          }
        >
          <div className="w-full h-full flex flex-col gap-2">
            <SmallLabel>Historial de detecciones</SmallLabel>
            <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-3 overflow-auto text-xs">
              {eventosMovimiento.length === 0 ? (
                <p className="text-slate-500 text-[11px]">
                  Aún no se ha registrado ninguna detección de movimiento.
                </p>
              ) : (
                <ul className="space-y-1">
                  {eventosMovimiento.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between gap-2 border-b border-slate-800/60 pb-1 last:border-b-0"
                    >
                      <span className="text-slate-200 font-mono">
                        Movimiento detectado
                      </span>
                      <span className="text-slate-500">
                        {formatHora(item.fecha)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </SensorCard>
      );
    }

    return null;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-50 flex flex-col">
      <header className="w-full border-b border-slate-800 flex items-center px-8 py-4">
        <div className="flex w-full items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Casa Inteligente EQ7
            </h1>
            <p className="text-sm text-slate-400">
              Insight Dashboard HomeX
            </p>
          </div>
          <button
            onClick={resetDatabase}
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-1.5 text-[11px] font-medium text-slate-100 hover:bg-slate-800 hover:border-slate-400 transition-colors"
          >
            Reset datos
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-row gap-6 px-6 py-6 w-full">
        {/* Lateral izquierdo: menú de sensores */}
        <aside className="w-72 shrink-0 bg-slate-950/60 border border-slate-800 rounded-2xl p-4 flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-slate-300 mb-1">
            Sensores
          </h2>

          <SensorButton
            label="NFC acceso"
            description="Coche y puerta"
            active={selectedSensor === "nfc"}
            onClick={() => setSelectedSensor("nfc")}
          />
          <SensorButton
            label="Puerta y ventanas"
            description="Puerta + 3 ventanas"
            active={selectedSensor === "ventanas"}
            onClick={() => setSelectedSensor("ventanas")}
          />
          <SensorButton
            label="Focos"
            description="Ático, PB y sótano"
            active={selectedSensor === "focos"}
            onClick={() => setSelectedSensor("focos")}
          />
          <SensorButton
            label="Elevador"
            description="Estado y botón"
            active={selectedSensor === "elevador"}
            onClick={() => setSelectedSensor("elevador")}
          />
          <SensorButton
            label="Movimiento ático"
            description="Detección de presencia"
            active={selectedSensor === "movimiento"}
            onClick={() => setSelectedSensor("movimiento")}
          />
        </aside>

        {/* Panel principal: gráfica / métricas */}
        <section className="flex-1 flex flex-col gap-4">
          {renderChart()}

          <div className="grid grid-cols-4 gap-3">
            <MiniStat
              label="Temperatura"
              value={
                ultimaTemp
                  ? `${ultimaTemp.temperatura_celsius.toFixed(1)} °C`
                  : "--"
              }
            />
            <MiniStat
              label="Luz"
              value={ultimaLuz ? `${ultimaLuz.ptaje_luz} %` : "--"}
            />
            <MiniStat
              label="Presión"
              value={
                ultimaPresion
                  ? `${ultimaPresion.presion_HPa.toFixed(1)} hPa`
                  : "--"
              }
            />
            <MiniStat
              label="Lluvia"
              value={
                ultimaLluvia
                  ? (ultimaLluvia.mojado ? "Sí" : "No")
                  : "--"
              }
            />
          </div>
          {selectedSensor === "ventanas" && (
            <div className="mt-4 bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 flex flex-col gap-3">
              <div className="text-xs text-slate-400">Control de puerta y ventanas</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="flex flex-col gap-1">
                  <SmallLabel>Ventana Ático 1</SmallLabel>
                  <div className="flex gap-2 flex-wrap">
                    <ControlButton label="Cerrar" onClick={() => controlVentana(1, 0)} />
                    <ControlButton label="Abrir" onClick={() => controlVentana(1, 1)} />
                    <ControlButton label="Auto" onClick={() => controlVentana(1, 2)} />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <SmallLabel>Ventana Ático 2</SmallLabel>
                  <div className="flex gap-2 flex-wrap">
                    <ControlButton label="Cerrar" onClick={() => controlVentana(2, 0)} />
                    <ControlButton label="Abrir" onClick={() => controlVentana(2, 1)} />
                    <ControlButton label="Auto" onClick={() => controlVentana(2, 2)} />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <SmallLabel>Ventana PB</SmallLabel>
                  <div className="flex gap-2 flex-wrap">
                    <ControlButton label="Cerrar" onClick={() => controlVentana(3, 0)} />
                    <ControlButton label="Abrir" onClick={() => controlVentana(3, 1)} />
                    <ControlButton label="Auto" onClick={() => controlVentana(3, 2)} />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <SmallLabel>Puerta</SmallLabel>
                  <div className="flex gap-2 flex-wrap">
                    <ControlButton label="Activar" onClick={() => controlPuerta(1)} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedSensor === "focos" && (
            <div className="mt-4 bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 flex flex-col gap-3">
              <div className="text-xs text-slate-400">Control de focos</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="flex flex-col gap-1">
                  <SmallLabel>Foco ático</SmallLabel>
                  <div className="flex gap-2 flex-wrap">
                    <ControlButton label="Apagar" onClick={() => controlFocoAtico(0)} />
                    <ControlButton label="Encender" onClick={() => controlFocoAtico(1)} />
                    <ControlButton label="Auto" onClick={() => controlFocoAtico(2)} />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <SmallLabel>Foco PB</SmallLabel>
                  <div className="flex gap-2 flex-wrap">
                    <ControlButton label="Apagar" onClick={() => controlFocoPB(0)} />
                    <ControlButton label="Encender" onClick={() => controlFocoPB(1)} />
                    <ControlButton label="Auto" onClick={() => controlFocoPB(2)} />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <SmallLabel>Foco sótano</SmallLabel>
                  <div className="flex gap-2 flex-wrap">
                    <ControlButton label="Apagar" onClick={() => controlFocoSotano(0)} />
                    <ControlButton label="Encender" onClick={() => controlFocoSotano(1)} />
                    <ControlButton label="Auto" onClick={() => controlFocoSotano(2)} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedSensor === "elevador" && (
            <div className="mt-4 bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 flex flex-col items-center gap-3 text-xs">
              <div className="text-xs text-slate-400">Control de elevador</div>
              <div className="flex flex-row gap-3 flex-wrap justify-center">
                <ControlButton label="Llamar elevador" onClick={controlElevador} />
                <ControlButton label="Subir elevador" onClick={controlElevadorSubir} />
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

// Componentes reutilizables

interface SensorCardProps {
  title: string;
  subtitle?: string;
  currentValue?: string;
  children: React.ReactNode;
}

function SensorCard({ title, subtitle, currentValue, children }: SensorCardProps) {
  return (
    <div className="w-full bg-slate-950/60 border border-slate-800 rounded-2xl p-5 flex flex-col gap-3">
      <div className="flex items-baseline justify-between mb-2">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
          {subtitle && (
            <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>
          )}
        </div>
        {currentValue && (
          <p className="text-sm font-mono text-slate-200">{currentValue}</p>
        )}
      </div>
      <div className="w-full space-y-3">{children}</div>
    </div>
  );
}

interface SensorButtonProps {
  label: string;
  description?: string;
  active?: boolean;
  onClick?: () => void;
}

function SensorButton({ label, description, active, onClick }: SensorButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-xl px-3 py-3 border text-[13px] transition-all ${
        active
          ? "border-sky-400 bg-sky-500/10 text-sky-100"
          : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-600 hover:bg-slate-900"
      }`}
    >
      <div className="font-medium leading-tight text-[14px]">{label}</div>
      {description && (
        <div className="text-[12px] text-slate-400 mt-0.5">{description}</div>
      )}
    </button>
  );
}

interface MiniStatProps {
  label: string;
  value: string;
}

function MiniStat({ label, value }: MiniStatProps) {
  return (
    <div className="bg-slate-950/60 border border-slate-800 rounded-xl px-3 py-2 flex flex-col gap-1">
      <span className="text-xs text-slate-400">{label}</span>
      <span className="text-sm font-semibold text-slate-50">{value}</span>
    </div>
  );
}

interface ControlButtonProps {
  label: string;
  onClick?: () => void;
}

function ControlButton({ label, onClick }: ControlButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-2 py-1 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 text-xs"
    >
      {label}
    </button>
  );
}

function SmallLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-xs text-slate-400 mb-1">{children}</div>;
}

function formatHora(fechaStr: string): string {
  try {
    const d = new Date(fechaStr);
    if (Number.isNaN(d.getTime())) return fechaStr;
    return d.toLocaleTimeString("es-MX", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return fechaStr;
  }
}

function compactByMinute<T extends { fecha: string }>(
  eventos: T[],
  keyFn: (item: T) => string
): T[] {
  const result: T[] = [];
  const seen = new Set<string>();

  // Recorremos de atrás hacia adelante (para quedarnos con el más reciente)
  for (let i = eventos.length - 1; i >= 0; i--) {
    const item = eventos[i];
    const d = new Date(item.fecha);
    if (Number.isNaN(d.getTime())) {
      continue;
    }
    const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}-${d.getHours()}-${d.getMinutes()}-${keyFn(item)}`;
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }

  // Volvemos a orden cronológico normal
  return result.reverse();
}

function agruparNFCPorMinuto<T extends {
  fecha: string;
  id_nfc: string;
  nombre: string | null;
  apellido: string | null;
}>(eventos: T[]): T[] {
  return compactByMinute(eventos, (item) => item.id_nfc);
}

interface TimeAreaChartProps<T> {
  data: T[];
  dataKey: keyof T;
  yLabel?: string;
}

function TimeAreaChart<T extends { fecha: string }>({
  data,
  dataKey,
  yLabel,
}: TimeAreaChartProps<T>) {
  return (
    <ResponsiveContainer>
      <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
        <XAxis
          dataKey="fecha"
          tick={{ fontSize: 10 }}
          hide={false}
          tickFormatter={(value) => formatHora(value as string)}
        />
        <YAxis tick={{ fontSize: 8 }} />
        <Tooltip
          content={({ payload }) => {
            if (!payload || payload.length === 0) return null;
            const rawValue = payload[0].value;
            const value =
              rawValue === null || rawValue === undefined ? "" : String(rawValue);
            const display = yLabel ? `${value}${yLabel}` : value;

            return (
              <div className="bg-slate-900 border border-slate-700 text-xs px-2 py-1 rounded">
                {display}
              </div>
            );
          }}
        />
        <Area
          type="monotone"
          dataKey={dataKey as string}
          stroke="#38bdf8"
          fill="#0f172a"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

interface BooleanLineChartProps<T> {
  data: T[];
  dataKey: keyof T;
  labelOn?: string;
  labelOff?: string;
}

function BooleanLineChart<T extends { fecha: string }>({
  data,
  dataKey,
  labelOn,
  labelOff,
}: BooleanLineChartProps<T>) {
  const onLabel = labelOn ?? "Abierto";
  const offLabel = labelOff ?? "Cerrado";

  return (
    <ResponsiveContainer width="100%" height={160}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
        <XAxis
          dataKey="fecha"
          tickFormatter={(value) => {
            try {
              const d = new Date(value as string);
              if (Number.isNaN(d.getTime())) return "";
              return d.toLocaleTimeString("es-MX", {
                hour: "2-digit",
                minute: "2-digit",
              });
            } catch {
              return "";
            }
          }}
          tick={{ fontSize: 10, fill: "#9ca3af" }}
        />
        <YAxis
          domain={[0, 1]}
          ticks={[0, 1]}
          tickFormatter={(v) => (v === 1 ? onLabel : offLabel)}
          tick={{ fontSize: 8, fill: "#9ca3af" }}
        />
        <Tooltip
          formatter={(value: any) => (value === 1 ? onLabel : offLabel)}
          labelFormatter={(label: any) => {
            try {
              const d = new Date(label as string);
              if (Number.isNaN(d.getTime())) return String(label ?? "");
              return d.toLocaleString("es-MX", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              });
            } catch {
              return String(label ?? "");
            }
          }}
          contentStyle={{
            backgroundColor: "#020617",
            borderColor: "#1f2937",
            borderRadius: 8,
            fontSize: 11,
          }}
        />
        <Line
          type="stepAfter"
          dataKey={dataKey as string}
          stroke="#38bdf8"
          strokeWidth={2}
          dot={{ r: 3 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

function ElevatorLineChart<T extends { fecha: string }>({
  data,
  dataKey,
}: BooleanLineChartProps<T>) {
  return (
    <ResponsiveContainer width="100%" height={160}>
      <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
        <XAxis
          dataKey="fecha"
          tickFormatter={(value) => {
            try {
              const d = new Date(value as string);
              if (Number.isNaN(d.getTime())) return "";
              return d.toLocaleTimeString("es-MX", {
                hour: "2-digit",
                minute: "2-digit",
              });
            } catch {
              return "";
            }
          }}
          tick={{ fontSize: 10, fill: "#9ca3af" }}
        />
        <YAxis
          domain={[0, 1]}
          ticks={[0, 1]}
          tickFormatter={(v) => (v === 1 ? "Planta baja" : "Sótano")}
          tick={{ fontSize: 8, fill: "#9ca3af" }}
        />
        <Tooltip
          formatter={(value: any) => (value === 1 ? "Planta baja" : "Sótano")}
          labelFormatter={(label: any) => {
            try {
              const d = new Date(label as string);
              if (Number.isNaN(d.getTime())) return String(label ?? "");
              return d.toLocaleString("es-MX", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              });
            } catch {
              return String(label ?? "");
            }
          }}
          contentStyle={{
            backgroundColor: "#020617",
            borderColor: "#1f2937",
            borderRadius: 8,
            fontSize: 11,
          }}
        />
        <Line
          type="stepAfter"
          dataKey={dataKey as string}
          stroke="#38bdf8"
          strokeWidth={2}
          dot={{ r: 3 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}