const mongoose = require('mongoose');
const { Schema } = mongoose;
const Compagnie = new mongoose.Schema(
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
        Catalog: {
            type:[{ type: Schema.Types.ObjectId, ref: 'Categorie' }],
        },
    }
);
module.exports = mongoose.model('Compagnie', Compagnie);
