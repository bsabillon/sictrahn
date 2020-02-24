const express = require('express');
const router = express.Router();
const cotizaciones_detServices = require('../services/app/cotizaciones_detServices');

router.get('/',cotizaciones_detServices.obtenerCotizaciones_det);
router.get('/obtenerPorId/:idcotizacion?',cotizaciones_detServices.obtenerCotizaciones_detPorId);
router.get('/obtenerPorCotizacionId/:idcotizacion?',cotizaciones_detServices.obtenerCotizaciones_detPorCotizacionId);

//router.post('/agregar', cotizaciones_enecServices.agregarCotizaciones_enc);
//router.delete('/eliminar/:idcotizacion?', cotizaciones_enecServices.eliminarCotizaciones_enc);

module.exports = router;