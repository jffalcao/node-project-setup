const http = require('http');

// VS Code add line comment ctrl+k ctrl+c
// VS code remove line comment ctrl+k ctrl+u

// Running locally: uncomment next line
// const host: 'localhost'

// Running in a container: uncomment next line
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Node project setup succesful!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});