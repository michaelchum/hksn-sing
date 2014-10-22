var express = require('express');
var app = express();
var compression = require('compression');

app.use(compression());
app.use(express.static(__dirname + '/public', { maxAge: 86400000 /* 1d */ }));

app.listen(process.env.PORT || 3000);