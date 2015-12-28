var express = require ('express');
var app = express();

var logger = function(req, res, next) {
  console.log(new Date(), req.method, req.url);
  next();
}

app.use(logger);


var port = 3000;
app.listen(port);