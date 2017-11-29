const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IngredientSchema = require('./ingredient.model')

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    Ingredients: [IngredientSchema]

});

const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;