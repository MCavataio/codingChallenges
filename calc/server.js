var express = require('express')
var app = express();
var path = require('path');

console.log(__dirname + '/client')
app.use(express.static(__dirname + '/client'))

app.listen(5000);