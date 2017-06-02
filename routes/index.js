var express = require('express');
var router = express.Router();

//include mysql module.  Had to npm install mysql bc not part of core.  
// It's not actually mysql, its a module that goes between MySQL and node.js
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'x',
  password : 'x',
  database : 'classicmodels' 
});

connection.connect(function (error){
	if (error){
		console.log(error.stack)
		return;
	}
	console.log("Connected as ID " + connection.threadId);
});

/* GET home page. */
router.get('/', function(req, res, next) {
	connection.query('SELECT * FROM customers;', function(error, results, fields){
		if (error) throw error;
		console.log(results);
		res.render('index', { results: results });
	});
  	
});

module.exports = router;
