var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var flash = require("connect-flash");
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();
app.set("view engine", "vash");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: 'QwackleBackle',
    saveUninitialized: true,
    resave: true}));
app.use(flash());

// use authentication
var auth = require("./auth");
auth.init(app);

var controllers = require("./controllers");
controllers.init(app);

var server = http.createServer(app);

server.listen(3000);
