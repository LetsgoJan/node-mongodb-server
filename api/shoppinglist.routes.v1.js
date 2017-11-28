var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var ShoppingList = require('../model/ingredient.model');

routes.post('/shoppingList', function (req, res) {
    res.contentType('application/json');
    const ingredientProps = req.body;

    ShoppingList.create(ingredientProps)
        .then(ingredient => res.send(ingredient));
});

routes.get('/shoppingList', function (req, res) {
    res.contentType('application/json');

    ShoppingList.find()
        .then ((result) => {
        res.send(result);
    })
});

routes.put('/shoppingList/:name', function (req, res) {
    res.contentType('application/json');
    const ingredientProps = req.body;
    const ingredientName = req.params.name;

    ShoppingList.findByIdAndUpdate({name : ingredientName}, ingredientProps)
        .then(() => ShoppingList.findOneAndUpdate({name : ingredientName}))
        .then((ingredient) => res.send(ingredient));
});

routes.delete('/shoppingList/:id', function (req, res) {
    res.contentType('application/json');
    const ingredientId = req.params.id;

    ShoppingList.findByIdAndRemove({_id : ingredientId});
});

module.exports = routes;