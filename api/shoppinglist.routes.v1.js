var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var ShoppingList = require('../model/ingredient.model');

routes.post('/ingredient', function (req, res) {
    res.contentType('application/json');
    const ingredientProps = req.body;

    ShoppingList.create(ingredientProps)
        .then(ingredient => res.send(ingredient));
});

routes.get('/ingredient', function (req, res) {
    res.contentType('application/json');

    ShoppingList.find()
        .then ((result) => {
        res.send(result);
    })
});

routes.put('/ingredient/:id', function (req, res) {
    res.contentType('application/json');
    const ingredientProps = req.body;
    const ingredientId = req.params.id;

    ShoppingList.findByIdAndUpdate({_id : ingredientId}, ingredientProps)
        .then(() => ShoppingList.findById({_id : ingredientId}))
        .then((ingredient) => res.send(ingredient));
});

routes.delete('/ingredient/:id', function (req, res) {
    res.contentType('application/json');
    const ingredientId = req.params.id;

    ShoppingList.findByIdAndRemove({_id : ingredientId});
});

module.exports = routes;