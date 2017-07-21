var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send('Welcome!');
});

app.listen(3000, function() {
  console.log('Server On!');
});
