const express = require('express');
const router = express.Router();
// * Path is a core Node module and constructs paths that work on all operating systems
const rootDir = require('../utilities/rootDir');

router.get('/users', (req, res) => {
  res.send(
    '<h1>Add User</h1><form action="/admin/add-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>'
  );
});

router.get('/admin/add-product', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-user', (req, res) => {
  console.log(req.body);
  res.send('This form was submitted correctly');
});

module.exports = router;
