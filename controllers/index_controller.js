var connM   =   require('../models/index_model');
var conf    =   require('../config');
var query   =   require('../models/query_model');


function getCompras(req, res,) {
    connM.exeConnDb(query.querySql.prueba1, (data, err) =>  {
        if (err) {
            res.status(500).send({
                message :   `500: Error Interno al realizar consulta ${err}`
            })
        }else{
            res.writeHead(200,{"Content-Type" : "application/json"});
            res.status(200).write(JSON.stringify(data));
        }
    }, conf.connSPABODEGA)
}

module.exports = {
    getCompras
}