var express = require('express');
var router = express.Router();
var sql = require('../sql/sql')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/query', sql.query);

router.post('/add', sql.add);

router.post('/deletes', sql.deletes);

router.post('/alter', sql.alter);

router.post('/login',sql.login);

router.post('/register',sql.register);

router.post('/page',sql.page);
module.exports = router;
