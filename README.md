# Proxy Correo Argentino

Este proyecto es un proxy en Node.js para consultar la API de Correo Argentino evitando problemas de CORS.

## Uso

Enviar una solicitud POST a `/proxy/envio` con el cuerpo:

```json
{ "cp": "B1001" }