const express = require('express');
const router = express.Router();
const commodityServices = require('../services/app/commoditiesServices');




router.get('/',commodityServices.obtenerCommodities);
//router.get('/obtenerPorLogin/:usuario_login?',usuariosServices.obtenerUsuarioPorLogin);
//router.post('/agregar', usuariosServices.agregarUsuarios);

//router.get('/login/:usuario_login?/:usuario_clave?',usuariosServices.tologin);


module.exports = router;