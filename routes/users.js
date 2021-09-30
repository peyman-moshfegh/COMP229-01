/*
File Name: users.js,
Student Name: Peyman Moshfegh,
Student ID: 301151808,
Date: 9/27/2021
*/

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
