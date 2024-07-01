const http = require('http');

const server = http.createServer((req, res) => {
    res.end('First WEB Server');
    //console.log('First WEB Server');
});

server.listen(3000, () => {
    console.log('Server is started');
});