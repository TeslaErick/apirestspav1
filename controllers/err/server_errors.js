function getHome(req, res) {
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write("<html><head><title>Home</title></head><body><a href="/">regresar</a></body></html>");
    res.end();
}

function get404(req, res) {
    res.writeHead(200,"Resource Not Found",{"Content-Type" : "text/html"});
    res.write("<html><head><title>404</title></head><body>404: Resource Not Found</body></html>")
    res.end();
}

exports.module = {
    getHome,
    get404
}