var sql =   require('mssql');

function exeConnDb( query, callback, confdb){
    var conn =  new sql.ConnectionPool(confdb);
    conn.connect().then(() => {
        var req = new sql.Request(conn);

        req.query(query).then((recordset) => {
            callback(recordset);
            conn.close();
        }).catch((err) => {
            console.log(err);
            callback(null, err);
            conn.close();
        })
    }).catch((err) => {
        console.log(err)
        callback(null, err)
    })
}

module.exports = {
    exeConnDb
}