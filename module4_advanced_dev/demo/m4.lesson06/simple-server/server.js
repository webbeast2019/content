const http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello WEBbeasts!');
}).listen(3000, () => {
	console.log('Listening at http://localhost:3000');
});