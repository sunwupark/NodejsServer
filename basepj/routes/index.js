var express = require('express');
var router = express.Router();

/* mysql setting */
const mysql = require('mysql');
const connection = mysql.createConnection({
  host : '127.0.0.1',
  port : '3306',
  user : 'root',
  password : 'park13579@',
  database : 'mediation_server'
});

connection.connect();


/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * from Users', (error, rows) => {
    console.log('id/pw: ', rows);
    res.send(rows);
  });
});

module.exports = router;