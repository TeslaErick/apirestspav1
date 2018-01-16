var express     = require('express');
var router      = express.Router();
var getCtrl     = require('../controllers/index_controller');
var conf        = require('../config');

/* GET home page. */
router.get('/bodega', function(req, res, next) {
    getCtrl.getListasStockGlobal(req, res, conf.connSPABODEGA);
});

router.get('/super1', function(req, res, next) {
    getCtrl.getListasStockGlobal(req, res, conf.connSPASUPER1);
});

router.get('/centro', function(req, res, next) {
    getCtrl.getListasStockGlobal(req, res, conf.connSPACENTRO);
});

router.get('/oluta', function(req, res, next) {
    getCtrl.getListasStockGlobal(req, res, conf.connOLUTA);
});

router.get('/jaltipan', function(req, res, next) {
    getCtrl.getListasStockGlobal(req, res, conf.connSPAJALTIPAN);
});

router.get('/112', function(req, res, next) {
    getCtrl.getListaCIENTODOCE(req, res, conf.connSPABODEGA);
});

router.get('/120', function(req, res, next) {
    getCtrl.getListaSugerido(req, res, conf.connCA2015);
});

module.exports = router;
