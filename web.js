var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var index = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.writeHeader(200, {"Content-Type": "text/html"});
  response.write(index);
  response.end();
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
