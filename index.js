"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var express = require("express");
dotenv.config();
var posts_1 = require("./posts");
var users_1 = require("./users");
var server = express();
var logger = function (req, res, next) {
    var date = new Date(Date.now());
    console.log(req.method + " " + req.url + " " + date.toISOString());
    next();
};
server.use(express.json());
server.use(logger);
server.use('/api/users', users_1.userRouter);
server.use('/api/posts', posts_1.postRouter);
var port = process.env.PORT;
server.listen(5000, function () { return console.log("listening on port " + port); });
