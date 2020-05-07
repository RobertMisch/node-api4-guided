const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

//an example from lecture. should return as an empty object
// server.get('/', function(req,res){
//     res.status(200).json({environment: process.env.NODE_ENV})
// })

server.use('/api', apiRouter);

module.exports = server;
