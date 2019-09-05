"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
exports.router = express.Router();
var validateUserId = function (req, res, next) {
};
var validateUser = function (req, res, next) {
};
var validatePost = function (req, res, next) {
};
exports.router.post('/', function (req, res) {
});
exports.router.post('/:id/posts', function (req, res) {
});
exports.router.get('/', function (req, res) {
    res.end();
});
exports.router.get('/:id', function (req, res) {
});
exports.router.get('/:id/posts', function (req, res) {
});
exports.router.delete('/:id', function (req, res) {
});
exports.router.put('/:id', function (req, res) {
});
exports.default = exports.router;
