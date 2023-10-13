require('dotenv').config();
const express = require('express');
const server = express();

const cors = require('cors');

const formRouter = require('./controller/formroutes');

server.use( cors() );
server.use(express.json());

server.use( '/form' , formRouter.router)


server.listen(4000 , () => {
    console.log('server started');
})
