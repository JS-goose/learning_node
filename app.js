// These lines are all that's required to create my own server - pretty cool!
// Single threaded execution with an event loop (multi-threaded via os)
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //   Hard quit of event loop - "powers down the server" - same as CTRL + C in terminal
  //   process.exit()
});

server.listen(3000);
