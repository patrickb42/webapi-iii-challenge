"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
});
router.get('/:id', function (req, res) {
});
router.delete('/:id', function (req, res) {
});
router.put('/:id', function (req, res) {
});
// custom middleware
var validatePostId = function (req, res, next) {
};
exports.default = router;
