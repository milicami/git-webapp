const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const createPosts = require('./posts-list.js');
const myResponse = createPosts();

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(myResponse));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});