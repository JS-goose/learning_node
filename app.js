// These lines are all that's required to create my own server - pretty cool!
// Single threaded execution with an event loop (multi-threaded via os)
const http = require("http");
// Node caches the file contet of the import thus making this a READ Only import //
// routes.newFunc = (data) => {console.log(data)} would not manipulate the original //
// file although it's possible to have functions within the routes file that could accomplish this //
const routes = require("./routes");

// createServer() has a built in event listener - with the example below listening for all req/res //
// This event listener is never done so this function will always be in the event loop //
const server = http.createServer();

server.listen(3000);
