"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userDb_1 = require("./userDb");
exports.router = express.Router();
var validateUserId = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, userDb_1.getById(id)];
            case 1:
                result = _a.sent();
                if (result === undefined)
                    return [2 /*return*/, res.status(400).json({ message: "invalid user id of " + id })];
                req.user = result;
                return [2 /*return*/, next()];
        }
    });
}); };
var validateUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var body;
    return __generator(this, function (_a) {
        body = req.body;
        if (body === undefined || body.name === undefined) {
            return [2 /*return*/, res.status(400).json({
                    message: (body === undefined)
                        ? 'missing post data'
                        : 'missing required text field',
                })];
        }
        return [2 /*return*/, next()];
    });
}); };
var validatePost = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var body;
    return __generator(this, function (_a) {
        body = req.body;
        if (body === undefined || body.text === undefined) {
            return [2 /*return*/, res.status(400).json({
                    message: (body === undefined)
                        ? 'missing post data'
                        : 'missing required text field',
                })];
        }
        return [2 /*return*/, next()];
    });
}); };
exports.router.post('/', validateUser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userDb_1.insert(req.body)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, (result === undefined)
                        ? res.status(500).json({ message: 'error adding user' })
                        : res.status(200).json(result)];
        }
    });
}); });
exports.router.post('/:id/posts', validateUserId, validatePost, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
exports.router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userDb_1.get()];
            case 1:
                result = _a.sent();
                if (result === undefined)
                    return [2 /*return*/, res.status(500).json({ message: 'unable to get users' })];
                return [2 /*return*/, res.status(200).json(result)];
        }
    });
}); });
var getUserById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, res.status(200).json(req.user)];
}); }); };
exports.router.get('/:id', validateUserId, getUserById);
exports.router.get('/:id/posts', validateUserId, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
exports.router.delete('/:id', validateUserId, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userDb_1.remove(req.params.id)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, (result === undefined || result < 1)
                        ? res.status(500).json({ message: "error deleting id " + req.params.id })
                        : res.status(200).json(req.user)];
        }
    });
}); });
var putUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userDb_1.update(req.params.id, req.body)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, (result === undefined || result < 1)
                        ? res.status(500).json({ message: 'error updating user' })
                        : next()];
        }
    });
}); };
exports.router.put('/:id', validateUserId, validateUser, putUser, validateUserId, getUserById);
exports.default = exports.router;
