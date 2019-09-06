"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
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
server.use('/users', users_1.userRouter);
server.use('/posts', posts_1.postRouter);
server.listen(5000, function () { return console.log('listening on port 5000'); });
