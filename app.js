// These lines are all that's required to create my own server - pretty cool!
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);