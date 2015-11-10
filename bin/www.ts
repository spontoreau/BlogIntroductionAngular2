/// <reference path='../typings/tsd.d.ts' />

import app = require('../app');
import http = require('http');

var server = http.createServer(app);
server.listen(app.get('port'));
server.on('error', (error) => {
    console.error(error);
});

server.on('listening', () => {
    console.log('Server listening on : ' + app.get('port'));
});