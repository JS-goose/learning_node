const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.send(
    '<h1>Add User</h1><form action="/adduser" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>'
  );
});

router.post('/adduser', (req, res) => {
  console.log(req.body);
  res.send('This form was submitted correctly');
});

module.exports = router;
