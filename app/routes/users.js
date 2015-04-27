var express = require('express');
var users   = express.Router();

users.get('/', index);
users.get('/:id', show);
users.post('/:id', store);
users.put('/:id', update);
users.delete('/:id', destroy);

function index (req, res, next) {
    console.log('get users');
}

function show (req, res, next) {
    console.log('show user');
}

function store (req, res, next) {
    console.log('new user');
}

function update (req, res, next) {
    console.log('update user');
}

function destroy (req, res, next) {
    console.log('delete user');
}

module.exports = users;

