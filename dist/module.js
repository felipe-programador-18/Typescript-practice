"use strict";
exports.__esModule = true;
//very interesting express it works inside typescript!!
var Express = require("express");
var app = Express();
//always request first later response
app.get('/', function (req, res) {
    res.send('hi there i am Felipe programmer18');
});
app.listen(8080, function (err) {
    console.log('running');
});
