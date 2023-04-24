const { info } = require('console');
const express = require('express');
const router = express.Router();
const rutasController = require('../controllers/rutas.controller')
const express = require('express');
const fs = require('fs');
const datosController = require('../controllers/datosController')

router.get('/datos', datosController.getDatos)

router.post('/datos', datosController.postDatos);

module.exports = router;