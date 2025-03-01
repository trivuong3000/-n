// server.js
const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('A new client connected');
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

const socket = new WebSocket('ws://localhost:3000/ws');

socket.onopen = () => {
  console.log('Connected to WebSocket');
};

socket.onerror = (error) => {
  console.error('WebSocket Error: ', error);
};

