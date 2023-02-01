// These lines are all that's required to create my own server - pretty cool!
// Single threaded execution with an event loop (multi-threaded via os)
const http = require("http");
const fs = require("fs");
const { parse } = require("path");

// createServer() has a built in event listener - with the example below listening for all req/res
const server = http.createServer((req, res) => {
  const num = Math.floor(Math.random());
  const url = req.url;
  // Routing
  if (url === "/submit") {
    res.write("<html>");
    res.write("<head><title>Send Your Message to the Server</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='user_input_field'><button type='submit'>Submit</button></input></form></body></head>"
    );
    res.write("</html>");
    // Return statement is not required to get a response but is used to end this function
    return res.end();
  }
  //   Hard quit of event loop - "powers down the server" - same as CTRL + C in terminal
  //   process.exit()

  if (url === "/message" && req.method === "POST") {
    const body = [];
    // .on() is an event listener that I'm registering here and it will listen for the data event //
    // This event will fire whenever a new chunk of data is ready to be read (helps with buffers) //
    req.on("data", (dataChunk) => {
      // dataChunk = chunked data being streamed by Node
      console.log(dataChunk);
      body.push(dataChunk);
    });

    req.on("end", () => {
      // Buffer is a global object made available by Node
      // Because I'm writing the code, I know that this function will recieve text - if it were //
      // something else like a file, then this would not work
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const stringifiedBody = parsedBody.split("=")[1];
      // Write user input to a new file //
      fs.writeFileSync(`userInput${num}`, stringifiedBody);
    });
    // This response is sent BEFORE the writing to a file function above
    res.write("<html>");
    res.write("<head><title>THANK YOU!</title></head>");
    res.write("<body><h1>Your Message Was Sent to the Server!</h1><p>We will contact you shortly :)</p></body>");

    // reroute user after the submit a message
    // res.setHeader("Location", "/");
    res.statusCode = 302;
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
