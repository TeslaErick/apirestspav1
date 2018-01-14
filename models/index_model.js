var sql     =   require('mssql');

function exeConnDb(confdb, query){
    var conn =  new sql.ConnectionPool(confdb);
    conn.conect().then(() => {
        var req = new sql.Request(conn);

        req.query(query).then((recordset) => {
            console.log(recordset);
            conn.close();
        }).catch((err) => {
            console.log(err);
            conn.close();
        })
    }).catch((err) => {
        console.log(err)
    })
}

exports.module = {
    exeConnDb
}