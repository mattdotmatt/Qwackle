/**
 * Created by myoung on 24/11/2014.
 */
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

var auth = require("./auth");
auth.init(app);

require('./routes')(app);

/*
 app.post("/newGame", function (req,res){
// use authentication
*/

module.exports = app;