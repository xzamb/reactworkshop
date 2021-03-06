const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect("mongodb+srv://username:password@cluster0-txwac.mongodb.net/database?retryWrites=true&w=majority",
{
    useNewUrlParser:true, 
    useUnifiedTopology: true
});

const routes = require('./routes');

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);

