"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require("../data/dbConfig");
function get() {
    return db('posts');
}
exports.get = get;
function getById(id) {
    return db('posts')
        .where({ id: id })
        .first();
}
exports.getById = getById;
function insert(post) {
    return db('posts')
        .insert(post)
        .then(function (ids) {
        return getById(ids[0]);
    });
}
exports.insert = insert;
function update(id, changes) {
    return db('posts')
        .where({ id: id })
        .update(changes);
}
exports.update = update;
function remove(id) {
    return db('posts')
        .where('id', id)
        .del();
}
exports.remove = remove;
