var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set("view engine", "vash");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var controllers = require("./controllers");
controllers.init(app);

var server = http.createServer(app);

server.listen(3000);
