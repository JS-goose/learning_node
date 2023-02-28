const express = require('express');
const router = express.Router();
// * Path is a core Node module and constructs paths that work on all operating systems
const path = require('path');

router.get('/users', (req, res) => {
  res.send(
    '<h1>Add User</h1><form action="/adduser" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>'
  );
});

router.use('/add-product', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/adduser', (req, res) => {
  console.log(req.body);
  res.send('This form was submitted correctly');
});

module.exports = router;