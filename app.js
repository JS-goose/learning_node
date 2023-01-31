// These lines are all that's required to create my own server - pretty cool!
// Single threaded execution with an event loop (multi-threaded via os)
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  // Routing
  if (url === "/submit") {
    res.write("<html>");
    res.write("<head><title>Send Your Message to the Server</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='bacon text here'><button type='submit'>Submit</button></input></form></body></head>"
    );
    res.write("</html>");
    // Return statement is not required to get a response but is used to end this function
    return res.end();
  }
  //   Hard quit of event loop - "powers down the server" - same as CTRL + C in terminal
  //   process.exit()

  if (url === "/message" && req.method === "POST") {
    res.write();
    return res.end();
  }
  //   There are packages that set this automatically for us
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hello From Node</title></head>");
  res.write("<body><h1>HELLO FROM NODE</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
