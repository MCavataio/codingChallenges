var express = require('express');
var app = express();

require('./middleware.js')(app, express);

app.listen(5000)
module.exports = app;