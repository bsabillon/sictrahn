const express = require('express');
const router = express.Router();
const commodityServices = require('../services/app/commoditiesServices');




router.get('/',commodityServices.obtenerCommodities);
router.get('/obtenerPorId/:idcommodity?',commodityServices.obtenerCommodityPorId);
router.post('/agregar', commodityServices.agregarCommodity);
router.delete('/eliminar/:idcommodity?', commodityServices.eliminarCommodity);



module.exports = router;