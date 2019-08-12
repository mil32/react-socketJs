require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');
const routeHandler = require('./handlers/routeHandler');
const socketHandler = require('./handlers/socketHandler').socketHandler;
const emitWeather = require('./utils/utils').emitWeather;

const PORT = process.env.PORT;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// manejo de rutas de express
app.use(routeHandler);

// manejo de sockets
socketHandler(io);

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
