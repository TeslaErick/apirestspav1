var express     = require('express');
var router      = express.Router();
var getCtrl  = require('../controllers/index_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Api Rest Full for Super Promociones Acayucan' });
});

module.exports = router;
