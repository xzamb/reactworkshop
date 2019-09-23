const express = require('express');

const videoController = require('./controllers/videoController');

const routes = express.Router();

routes.post('/videos', videoController.store);
routes.get('/videos', videoController.index);
routes.put('/videos/:id', videoController.update);

module.exports = routes;