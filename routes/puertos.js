const express = require('express');
const router = express.Router();
const puertosServices = require('../services/app/puertosServices');




router.get('/',puertosServices.obtenerPuertos);
router.get('/obtenerPorId/:idpuerto?',puertosServices.obtenerPuertoPorId);
router.post('/agregar', puertosServices.agregarPuerto);
router.delete('/eliminar/:idcommodity?', puertosServices.eliminarPuerto);



module.exports = router;