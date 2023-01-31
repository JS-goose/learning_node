// These lines are all that's required to create my own server - pretty cool!
// Single threaded execution with an event loop (multi-threaded via os)
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  // Routing
  if (url === "/submit") {
    res.write("<html>");
    res.write("<head><title>Send Your Message to the Server</title></head>");
    res.write("<body><input type='text'><button type='submit'>Submit</button></input></body></head>");
    res.write("</html>");
    res.end();
  }
  //   Hard quit of event loop - "powers down the server" - same as CTRL + C in terminal
  //   process.exit()

  //   There are packages that set this automatically for us
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hello From Node</title></head>");
  res.write("<body><h1>HELLO FROM NODE</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
