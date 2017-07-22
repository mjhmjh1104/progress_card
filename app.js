var express = require('express');
var path = require('path');
var app = express();

console.log(req);
console.log(res);

app.get('/', function(req, res) {
  res.send('Welcome!');
});

app.listen(3000, function() {
  console.log('Server On!');
});
