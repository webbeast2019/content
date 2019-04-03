const http = require('http');
const fs = require('fs');
const url = require('url');

const contentTypes = new Map();
contentTypes.set('html', 'text/html');
contentTypes.set('js', 'text/javascript');
contentTypes.set('css', 'text/css');
contentTypes.set('json', 'application/json');


http.createServer(function (req, res) {
    const reqUrl = url.parse(req.url);
    const ext = reqUrl.pathname.split('.')[1];
    const fileName = reqUrl.pathname.substr(1);
    const cType = contentTypes.get(ext);


    fs.readFile('public/' + fileName, function(err, data) {
        if(err) {
            if(err.code == 'ENOENT'){
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write('Resource no found');
            }
            else {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write('Server Error');
            }
        } else {
            res.writeHead(200, {'Content-Type': cType});
            res.write(data);
        }
        res.end();
    });
}).listen(8080, function () {
    console.log('Client is available at http://localhost:8080');
});