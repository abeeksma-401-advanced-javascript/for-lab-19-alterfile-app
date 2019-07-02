'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3000');

socket.emit('something', 'sunshine and rainbows');

socket.on('save', payload => {
  console.log('commited this madness to memory', payload);
});

socket.on('data', data => {
  console.log('LOG', data.toString());
});

socket.on('close', () => {
  console.log('the way is closed!!!');
});