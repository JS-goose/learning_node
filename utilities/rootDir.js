const path = require('path');
// * Path is a globally available module from Node and dirname gets the //
// * directory for the file passed in - process.main.filename refers to the //
// * main file that started the Node process (app.js) //
module.exports = path.dirname(require.main.filename);
