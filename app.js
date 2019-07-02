'use strict';

require('./network-logger');

const alterFile = require('./alterFiles/read-write');


let file = process.argv.slice(2).shift();
alterFile(file);
