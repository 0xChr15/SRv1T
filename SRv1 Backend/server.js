const http = require('http');
const app = require('./app'); // your app file with the routes and middleware

const port = process.env.PORT || 3000; // the port number for the server to listen on

const server = http.createServer(app); // create the server

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
