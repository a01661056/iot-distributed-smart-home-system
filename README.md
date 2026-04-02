# IoT Distributed Smart Home System (Arduino, FastAPI, MQTT, Next.js)

A distributed smart home automation system that integrates embedded hardware, real-time MQTT communication, a FastAPI backend, MySQL persistence, and a Next.js monitoring dashboard.

This project demonstrates full-stack IoT system design, event-driven architecture, and real-time communication between embedded devices, backend services, and user interfaces.

---

## Collaboration

This project was developed collaboratively as part of an academic project focused on IoT system integration and distributed architectures.

Developed with:
- Ricardo Morán Ávila
- Joaquín Ruenes Hernández
- Rafael Tello Arenas

---

## Key Contributions

- Designed and implemented a distributed IoT architecture connecting an Arduino-based edge device, MQTT broker, FastAPI backend, MySQL database, and Next.js frontend  
- Built a Python MQTT worker that subscribes to telemetry topics, parses heterogeneous payloads, and bridges MQTT messaging into REST requests  
- Developed a FastAPI backend with DTO and repository layers for sensor ingestion, historical event storage, data retrieval, and remote device control  
- Implemented a real-time dashboard in Next.js for monitoring environmental data, access activity, lighting, windows, elevator state, and movement events  
- Integrated local embedded automation logic so the physical system could continue reacting even if backend services were unavailable  
- Coordinated multi-service startup and communication across database, backend, MQTT worker, edge device, and frontend  

---

## My Role

My primary contribution focused on system architecture design and integration across the full IoT stack.

I was responsible for designing and implementing the communication flow between the Arduino edge device, MQTT broker, backend services, database, and frontend dashboard. This included building the MQTT-to-REST bridge, designing backend data models, and ensuring reliable end-to-end data flow across asynchronous and synchronous components.

I also worked on handling real-world challenges such as MQTT latency, I2C communication issues, database reliability, and maintaining system functionality through partial failures using local embedded logic.

---

## System Architecture

- Arduino-based edge device for sensor acquisition, actuator control, and local automation  
- MQTT broker for publish/subscribe communication  
- Python MQTT worker translating telemetry into backend API requests  
- FastAPI backend exposing ingestion, query, and control endpoints  
- MySQL database storing historical system events  
- Next.js dashboard for real-time monitoring and control  

This architecture demonstrates integration across embedded systems, messaging infrastructure, backend services, and frontend visualization.

---

## Demo & Documentation

- Demo Video: https://youtu.be/fEgXwqgo7SM  

---

## Main Features

- Real-time telemetry ingestion from physical sensors  
- Historical storage of environmental and interaction data  
- Remote control of devices through backend-triggered MQTT commands  
- NFC-based access logging  
- Real-time dashboard visualization  
- Local automation for resilient system behavior  

---

## Startup Flow

1. Start MySQL  
2. Initialize database schema  
3. Run FastAPI backend  
4. Run MQTT worker  
5. Start Arduino edge device  
6. Launch Next.js frontend  

---

## Repository Structure

- `backend/main.py`: FastAPI backend  
- `backend/mqtt_worker.py`: MQTT bridge  
- `backend/repositories.py`: Database access layer  
- `backend/dtos.py`: API models  
- `frontend/app/page.tsx`: Dashboard UI  
- `frontend/app/layout.tsx`: App layout  
- `frontend/package.json`: Frontend dependencies  

---

## Hardware/Software Stack

- Embedded platform: Arduino  
- Protocol: MQTT  
- Backend: FastAPI (Python)  
- Database: MySQL  
- Frontend: Next.js + React  
- Architecture: Event-driven + distributed system  

---

## Data Flow

### Telemetry Pipeline
1. Arduino reads sensors  
2. Publishes data via MQTT  
3. MQTT worker processes messages  
4. Sends HTTP requests to backend  
5. Backend stores data in MySQL  
6. Frontend retrieves and displays data  

### Control Pipeline
1. User triggers action in dashboard  
2. Frontend calls backend endpoint  
3. Backend publishes MQTT command  
4. Arduino executes physical action  

---

## Engineering Challenges

- Designing a distributed architecture instead of a monolithic system  
- Bridging asynchronous MQTT with REST APIs  
- Persisting heterogeneous IoT data  
- Coordinating real-time communication across multiple services  
- Handling hardware-level issues (I2C failures, sensor noise)  
- Managing latency and reliability in MQTT communication  

---

## Notes

- Source code is in Spanish; documentation is in English  
- Embedded firmware is not included in this repository  
- This repository is intended for portfolio and CV presentation  

---
