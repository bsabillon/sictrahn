const express = require('express');
const router = express.Router();
const cotizaciones_enecServices = require('../services/app/cotizaciones_encServices');

router.get('/',cotizaciones_enecServices.obtenerCotizaciones_enc);
router.get('/obtenerPorId/:idcotizacion?',cotizaciones_enecServices.obtenerCotizaciones_encPorId);
router.get('/obtenerPorClienteId/:idcliente?',cotizaciones_enecServices.obtenerCotizaciones_encPorClienteId);

router.post('/agregar', cotizaciones_enecServices.agregarCotizaciones_enc);
router.delete('/eliminar/:idcotizacion?', cotizaciones_enecServices.eliminarCotizaciones_enc);

module.exports = router;