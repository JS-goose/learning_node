const express = require('express');
const router = express.Router();
const path = require('path');

// router.get('/', (req, res) => {
//   res.send('<h1>Response for "/"</h1>');
// });

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});

module.exports = router;
