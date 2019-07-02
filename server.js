'use strict';

const eventHub = require('./eventHub');

const ioFactory = require('socket.io');
const io = ioFactory(3000);

io.on('connection', socket => {
  console.log('This socket has connected:', socket.id);

  socket.on('something', payload => {
    console.log('', payload);
    socket.broadcast.emit('something', payload);
  });

  socket.on('save', payload => {
    console.log('A save has happened',  payload);
    socket.broadcast.emit('save', payload);
  });

  socket.on('error', payload => {
    console.log('Some sort of error occoured with:', payload);
    socket.broadcast.emit('error', payload);
  });

});





// let dispatchEvent = (buffer) => {
//   let text = buffer.toString().trim();
//   for (let socket in socketPool) {                       <---- not sure if i still need this?
//     socketPool[socket].write(`${text}\r\n`);
//   }
// };


