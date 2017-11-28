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

routes.get('/ingredient', function (req, res) {
    res.contentType('application/json');

    Ingredient.find()
        .then ((result) => {
        res.send(result);
    })
});

routes.put('/ingredient/:id', function (req, res) {
    res.contentType('application/json');
    const ingredientProps = req.body;
    const ingredientId = req.params.id;

    Ingredient.findByIdAndUpdate({_id : ingredientId}, ingredientProps)
        .then(() => Ingredient.findById({_id : ingredientId}))
        .then((ingredient) => res.send(ingredient));
});

routes.delete('/ingredient/:id', function (req, res) {
    res.contentType('application/json');
    const ingredientId = req.params.id;

    Ingredient.findByIdAndRemove({_id : ingredientId});
});

module.exports = routes;