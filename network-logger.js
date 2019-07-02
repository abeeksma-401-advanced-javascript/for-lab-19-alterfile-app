'use strict';

const eventHub = require('./eventHub');

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.on('disconnect', () => {
  socket.close();
});

intializeLogger();

function intializeLogger() {
  eventHub.on('save', log('save'));
  eventHub.on('delete', log('delete'));
  eventHub.on('update', log('update'));
  eventHub.on('error', log('error'));
}

function log(eventType) {
  return payload => {
    socket.emit(eventType, payload);
    console.log(eventType, payload);
  };
}
