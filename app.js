var express = require('express');
var path = require('path');
var app = express();

app.set("view engine", 'ejs');

var data = {count : 0};

app.get('/', function(req, res) {
  data.count++;
  res.render('main', data);
});

app.get('/reset', function(req, res) {
  data.count = 0;
  res.render('main', data);
});

app.get('/set/count', function(req, res) {
  if (req.query.count)
    data.count = req.query.count;
  res.render('main', data);
});

app.get('/set/:num', function(req,res) {
  data.count = req.params.num;
  res.render('main', data);
});

app.listen(3000, function() {
  console.log('Server On!');
});
