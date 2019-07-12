'use strict';

const nodeListWebSocket = document.querySelector('.websocket').children;
const arrWebSocket = Array.from(nodeListWebSocket);

const ws = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');

ws.addEventListener('message', event => {
  arrWebSocket.forEach(el => el.textContent === event.data ? el.classList.add('flip-it') : el.classList.remove('flip-it'));
})

ws.addEventListener('close', event => {
  console.log(event.reason);
})