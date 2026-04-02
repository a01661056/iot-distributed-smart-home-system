# IoT Distributed Smart Home System (Arduino, FastAPI, MQTT, Next.js)

A distributed smart home automation system that integrates embedded hardware, real-time MQTT communication, a FastAPI backend, MySQL persistence, and a Next.js monitoring dashboard. The project was designed as an event-driven IoT architecture where an edge device captures physical data and executes local actions, while central services handle storage, remote control, and visualization.

## Key Contributions

- Designed and implemented a distributed IoT architecture connecting an Arduino-based edge device, MQTT broker, FastAPI backend, MySQL database, and Next.js frontend
- Built a Python MQTT worker that subscribes to telemetry topics, parses heterogeneous payloads, and bridges MQTT messaging into REST requests
- Developed a FastAPI backend with DTO and repository layers for sensor ingestion, historical event storage, data retrieval, and remote device control
- Implemented a real-time dashboard in Next.js for monitoring environmental data, access activity, lighting, windows, elevator state, and movement events
- Integrated local embedded automation logic so the physical system could continue reacting to environmental conditions even if backend services were unavailable
- Coordinated a multi-service startup flow across database, backend, MQTT worker, edge device, and frontend to achieve full end-to-end operation

## My Role

My work focused on the system integration and software architecture side of the project. I developed the distributed communication flow between the IoT device, MQTT broker, backend services, database, and frontend dashboard, and worked on the logic required to persist, visualize, and remotely control the system.

I also handled the challenges of connecting asynchronous MQTT communication with REST-based backend services, storing historical sensor data, and making the system robust enough to support real-time monitoring and control across multiple interacting components.

## System Architecture

- Arduino-based edge device for sensor acquisition, actuator control, and local automation
- MQTT broker for publish/subscribe communication between hardware and backend services
- Python MQTT worker that translates telemetry messages into FastAPI HTTP requests
- FastAPI backend exposing ingestion, query, reset, and control endpoints
- MySQL database storing the full historical record of system events
- Next.js dashboard for remote monitoring and control

This architecture demonstrates full-stack IoT integration across embedded systems, messaging infrastructure, backend development, data persistence, and frontend visualization.

## Demo Video

[Watch the full project demo on YouTube](https://youtu.be/fEgXwqgo7SM?si=3TVixz7GMnay7euO)

## The System Combines

- Embedded sensing and actuation on an Arduino-based controller
- MQTT publish/subscribe communication using hierarchical topics such as `EQ7/HomeX/...`
- A Python bridge service (`backend/mqtt_worker.py`) that converts MQTT messages into backend API requests
- A FastAPI backend (`backend/main.py`) with repository-based persistence
- A MySQL database that stores event history rather than only the latest state
- A Next.js dashboard (`frontend/app/page.tsx`) for visualization and remote control

## Main Features

- Real-time telemetry ingestion from physical sensors
- Historical storage of temperature, pressure, light, rain, motion, NFC access, windows, door, lights, and elevator activity
- Remote control of windows, lights, door, and elevator through backend-triggered MQTT commands
- NFC-based access logging for vehicle and door entry events
- Dashboard visualization for both current values and recent historical trends
- Local automation on the edge device for responsive physical behavior

## Startup Flow

To run the complete system correctly, the components must start in this order:

1. Start MySQL
2. Ensure the `casa` database and required tables exist
3. Run the FastAPI backend
4. Run the MQTT worker
5. Start the Arduino edge device
6. Run the Next.js frontend

This order is important because each layer depends on the previous one. Without the database, the backend cannot persist data; without the backend, the MQTT worker cannot forward telemetry; without the worker or broker, sensor data will not reach the central system.

## Repository Structure

- `backend/main.py`: FastAPI application with telemetry, query, reset, and control endpoints
- `backend/mqtt_worker.py`: MQTT-to-REST bridge service
- `backend/repositories.py`: MySQL repository layer for event persistence and retrieval
- `backend/dtos.py`: Request and response models for the API
- `backend/requirements.txt`: Python dependencies
- `frontend/app/page.tsx`: Main dashboard view and control interface
- `frontend/app/layout.tsx`: Frontend app layout
- `frontend/package.json`: Frontend dependencies and scripts
- `frontend/README.md`: Frontend overview

## Hardware/Software Stack

- Embedded platform: Arduino-based edge device
- Messaging protocol: MQTT
- Backend: FastAPI + Python
- Database: MySQL
- Frontend: Next.js + React + Recharts
- Communication model: REST + publish/subscribe

## Data Flow

### Telemetry Pipeline

1. The Arduino reads sensors and detects physical events.
2. The device publishes values to MQTT topics.
3. The MQTT worker receives and parses those messages.
4. The worker sends HTTP requests to the FastAPI backend.
5. The backend stores the resulting events in MySQL.
6. The frontend queries the backend and displays the information.

### Control Pipeline

1. The user triggers an action from the dashboard.
2. The frontend calls a FastAPI control endpoint.
3. The backend publishes a command to the corresponding MQTT control topic.
4. The Arduino receives the command and applies the physical action.

## Engineering Challenges

- Designing a modular distributed architecture instead of a monolithic prototype
- Bridging asynchronous MQTT communication with REST-based backend services
- Persisting heterogeneous IoT events in a relational database
- Handling real-time coordination between sensing, storage, visualization, and control
- Supporting partial fault tolerance through local embedded automation
- Working through practical issues such as I2C communication failures, public broker latency, and database connectivity

## Notes

- This repository is intended to document the completed project for portfolio and CV purposes.
- The source code in the repo remains in Spanish, while the repository documentation is written in English.
- The embedded firmware source is not currently included in this repository.
- A large local `.MOV` presentation file is intentionally excluded from version control.
