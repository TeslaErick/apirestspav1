var express     = require('express');
var router      = express.Router();
var getCtrl  = require('../controllers/index_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
    getCtrl.getCompras(req, res);
    //res.render('index', { title: 'Express' });
});

module.exports = router;
