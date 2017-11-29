const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    Ingredients: {
        type: [{name: String, amount: Number}]
    }
});

const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;