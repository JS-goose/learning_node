//  These lines are all that's required to create my own server - pretty cool!
// Single threaded execution with an event loop (multi-threaded via os)
// ! Not required as Express handles this for me
// const http = require('http');
// Node caches the file contet of the import thus making this a READ Only import //
// routes.newFunc = (data) => {console.log(data)} would not manipulate the original //
// file although it's possible to have functions within the routes file that could accomplish this //
// const routes = require("./routes");

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// * If there's middleware that should execute for all requests, it needs to be first in line //
// * By default, express will set the header type but I can override if necessary

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
// * app.listen does the same thing as these 2 lines of Node
// createServer() has a built in event listener - with the example below listening for all req/res //
// This event listener is never done so this function will always be in the event loop //
// const server = http.createServer(app);
// server.listen(3000);
