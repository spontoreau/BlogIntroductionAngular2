/// <reference path='./typings/tsd.d.ts' />
import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
import routes = require('./routes/index');
import users = require('./routes/users');
import ejs = require('ejs');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);
app.use('/', routes);
app.use('/user', users);
app.set('port', process.env.PORT || '3000');

export = app;