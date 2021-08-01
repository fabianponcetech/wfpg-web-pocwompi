'use strict';
var express = require('express');
var router = express.Router();

var db = {}

router.post('/ingresar-vehiculo', function (req, res) {

    console.log("BODY", req.body);
    req.body.id = genIdParaIngresos(100000, 999999);
    db.ingresos.push(req.body);
    db.ingresosHistorico.push(req.body);
    console.info('### Vehículo ingresado ###', req.body);
    return res.json(req.body);
});

router.get('/health', (req, res) => res.send("RUNNING..."));

module.exports = router;