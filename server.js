var http = require('http');
var _ = require('lodash');
var express = require('express');
var history = require('connect-history-api-fallback');

var app = express();
app.use(history());
app.use(express.static('dist'));
app.use(express.static('public'));

app.use(function(err, req, res, next) {
    require('util').inspect(err);
    res.status(500).send({ error: err.message });
});

http.createServer(app)
    .listen(9999, function() {
        console.log('Running on port 9999');
    });

