var express = require('express');
var path = require('path');
var app = express();

app.set("view engine", 'ejs');
app.get('/', function(req, res) {
  res.render('main.ejs');
});

app.listen(3000, function() {
  console.log('Server On!');
});
