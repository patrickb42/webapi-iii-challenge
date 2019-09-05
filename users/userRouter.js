"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.post('/', function (req, res) {
});
router.post('/:id/posts', function (req, res) {
});
router.get('/', function (req, res) {
});
router.get('/:id', function (req, res) {
});
router.get('/:id/posts', function (req, res) {
});
router.delete('/:id', function (req, res) {
});
router.put('/:id', function (req, res) {
});
//custom middleware
var validateUserId = function (req, res, next) {
};
var validateUser = function (req, res, next) {
};
var validatePost = function (req, res, next) {
};
exports.default = router;
