'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/draw');

connection.addEventListener('message', event => {
  console.log(event.data);
})

editor.addEventListener('update', event => {
  const canvas = event.canvas;
  canvas.toBlob(blob => {
    connection.send(blob);
  })
})
