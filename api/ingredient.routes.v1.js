var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Ingredient = require('../model/ingredient.model');

routes.post('/ingredient', function (req, res) {
    res.contentType('application/json');
    const ingredientProps = req.body;

    Ingredient.create(ingredientProps)
        .then(ingredient => res.send(ingredient));
});

routes.get('/ingredient/:id', function (req, res) {
    res.contentType('application/json');
    const ingredientProps = req.body;
    const ingredientId = req.params.id;

    Ingredient.findByIdAndUpdate({_id : ingredientId}, ingredientProps)
        .then(() => Ingredient.findbyid({_id : ingredientId}))
        .then((ingredient) => res.send(ingredient));
});

module.exports = routes;