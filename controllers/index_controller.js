var connM   =   require('../models/index_model');
var conf    =   require('../config');
var query   =   require('../models/query_model');


function getListasStockGlobal(req, res) {
    connM.exeConnDb( query.querySql.orderListaStockGlobalArticulos, (data, err) =>  {
        if (err) {
            res.status(500).send({
                message :   `500: Error Interno al realizar consulta ${err}`
            })
        }else{
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*');
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.writeHead(200,{"Content-Type" : "application/json"});
            res.status(200).write(JSON.stringify(data));
        }
        res.end();
    }, conf.connSPABODEGA)
}

module.exports = {
    getListasStockGlobal
}