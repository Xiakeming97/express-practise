var express = require('express');
var router = express.Router();
const { query,matchedData, validationResult } = require('express-validator');

const db = require('../db/db'); // 导入db模块

/* GET users listing. */
router.get('/', query('id').notEmpty().escape(),(req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(`Hello, ${req.query.id}!`);
  }

  res.send({ errors: result.array() });
});


module.exports = router;
