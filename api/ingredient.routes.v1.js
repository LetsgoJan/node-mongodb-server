var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var User = require('../model/user.model');

routes.post('/ingredient', function (res, req) {
    const ingredientProps = req.body;

    User.create(ingredientProps)
        .then(ingredient => res.send(ingredient));
});

module.exports = routes;