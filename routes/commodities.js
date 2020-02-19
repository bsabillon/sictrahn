const express = require('express');
const router = express.Router();
const commodityServices = require('../services/app/commoditiesServices');




router.get('/',commodityServices.obtenerCommodities);
router.get('/obtenerPorId/:idcommodity?',commodityServices.obtenerCommoditiesPorId);
router.post('/agregar', commodityServices.agregarCommodities);
router.delete('/eliminar/:idcommodity?', commodityServices.eliminarCommodities);



module.exports = router;