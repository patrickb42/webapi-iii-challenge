"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
exports.router = express.Router();
// custom middleware
var validatePostId = function (req, res, next) {
};
exports.router.get('/', validatePostId, function (req, res) {
});
exports.router.get('/:id', function (req, res) {
});
exports.router.delete('/:id', function (req, res) {
});
exports.router.put('/:id', function (req, res) {
});
exports.default = exports.router;
