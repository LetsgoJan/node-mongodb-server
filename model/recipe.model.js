const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IngredientSchema = require('./ingredient.model').IngredientSchema;

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
    ingredients: [IngredientSchema]

});

const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;