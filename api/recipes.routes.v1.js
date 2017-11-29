var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var ShoppingList = require('../model/ingredient.model');
var Recipe = require('../model/recipe.model');

routes.post('/recipe', function (req, res, next) {
    res.contentType('application/json');
    const ingredientProps = req.body;

    Recipe.create(ingredientProps)
        .then(ingredient => res.send(ingredient))
        .catch(next);
});

routes.get('/recipe', function (req, res, next) {
    res.contentType('application/json');

    Recipe.find()
        .then ((result) => {
            res.send(result);
        })
        .catch(next);
});

routes.put('/recipe/:id', function (req, res, next) {
    res.contentType('application/json');
    const ingredientProps = req.body;
    const ingredientId = req.params.id;

    Recipe.findByIdAndUpdate({_id : ingredientId}, ingredientProps)
        .then(() => ShoppingList.findById({_id : ingredientId}))
        .then((ingredient) => res.send(ingredient))
        .catch(next);
});

routes.delete('/recipe/:id', function (req, res,next) {
    res.contentType('application/json');
    const ingredientId = req.params.id;

    Recipe.findByIdAndRemove({_id : ingredientId})
        .catch(next);
});

module.exports = routes;