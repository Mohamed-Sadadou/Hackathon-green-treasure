const mongoose = require('mongoose');
const { Schema } = mongoose;
const Products = new mongoose.Schema(
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
        Categorie: {
            type: Schema.Types.ObjectId, ref: 'Categorie',
        }
    }
);
module.exports = mongoose.model('Products', Products);
