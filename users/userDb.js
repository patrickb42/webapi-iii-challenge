"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require("../data/dbConfig");
function get() {
    return db('users');
}
exports.get = get;
function getById(id) {
    return db('users')
        .where({ id: id })
        .first();
}
exports.getById = getById;
function getUserPosts(userId) {
    return db('posts as p')
        .join('users as u', 'u.id', 'p.user_id')
        .select('p.id', 'p.text', 'u.name as postedBy')
        .where('p.user_id', userId);
}
exports.getUserPosts = getUserPosts;
function insert(user) {
    return db('users')
        .insert(user)
        .then(function (ids) {
        return getById(ids[0]);
    });
}
exports.insert = insert;
function update(id, changes) {
    return db('users')
        .where({ id: id })
        .update(changes);
}
exports.update = update;
function remove(id) {
    return db('users')
        .where('id', id)
        .del();
}
exports.remove = remove;
