var express = require('express');
var router = express.Router();

const db = require('../db/db'); // 导入db模块

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('Users page');
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.send(`User ${id}`);
});

module.exports = router;
