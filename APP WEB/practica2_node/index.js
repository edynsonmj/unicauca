//SERVIDOR EN NODE PURO
/*
este es el primer ejemplo de la construccion de un servidor construido con node js
*/
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('mi primer fucking servidor en node js');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});