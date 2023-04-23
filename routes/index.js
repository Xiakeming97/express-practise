var express = require('express');
var router = express.Router();
const db = require('../db/db'); // 导入db模块


/* GET home page. */
router.get('/', (req, res,next) => {
  res.send('Hello, World!');
});

module.exports = router;