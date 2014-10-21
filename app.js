var express = require('express');
var compression = require('compression');
var app = express();

// New call to compress content
app.use(compression());

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);