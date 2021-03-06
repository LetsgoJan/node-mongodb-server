var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var ShoppingList = require('../model/ingredient.model').Ingredient;

routes.post('/shoppingList', function (req, res, next) {
    res.contentType('application/json');
    const ingredientProps = req.body;

    ShoppingList.create(ingredientProps)
        .then(ingredient => res.send(ingredient))
        .catch(next);
});

routes.get('/shoppingList', function (req, res, next) {
    res.contentType('application/json');

    ShoppingList.find()
        .then ((result) => {
        res.send(result);
    })
        .catch(next);
});

routes.get('/shoppingList/:id', function (req, res, next) {
    res.contentType('application/json');
    const ingredientId = req.params.id;

    ShoppingList.findOne({_id : ingredientId})
        .then ((result) => {
            res.send(result);
        })
        .catch(next);
});

routes.put('/shoppingList/:id', function (req, res, next) {
    res.contentType('application/json');
    const ingredientProps = req.body;
    const ingredientId = req.params.id;

    ShoppingList.findByIdAndUpdate({_id : ingredientId}, ingredientProps)
        .then(() => ShoppingList.findById({_id : ingredientId}))
        .then((ingredient) => res.send(ingredient))
        .catch(next);
});

routes.delete('/shoppingList/:id', function (req, res, next) {
    res.contentType('application/json');
    const ingredientId = req.params.id;

    ShoppingList.findByIdAndRemove({_id : ingredientId})
        .then(res.send({msg:'item deleted'}))
        .catch(next);
});

module.exports = routes;