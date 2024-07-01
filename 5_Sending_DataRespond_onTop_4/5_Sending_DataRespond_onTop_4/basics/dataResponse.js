const http = require('http');

const data = [
    {
        id : 1,
        name : "John"
    },

    {
        id : 2,
        name : "Steve"
    },

    {
        id : 3,
        name : "Chris"
    },

    {
        id : 4,
        name : "Peter"
    },

]

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Language', 'en-US');
    res.setHeader('Date', new Date(Date.now()));
    res.setHeader('X-Powered-By', 'Node.js');
    res.end(
        JSON.stringify({
            success : true,
            results : data.length,
            data : data
            //message : 'Data was sent. '
    }));
    //console.log('First WEB Server');
});

server.listen(3000, () => {
    console.log('Server is started');
});