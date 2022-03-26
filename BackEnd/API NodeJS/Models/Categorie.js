const mongoose = require('mongoose');
const { Schema } = mongoose;
const Categorie = new mongoose.Schema(
    {
        Nom: {
            type: String,
            required: true,
            unique: true,
        },
        Description: {
            type: String
        },
        Image: {
            type: [String]
        },
        Points: {
            type: Number,
        }
    }
);
module.exports = mongoose.model('Categorie', Categorie);
