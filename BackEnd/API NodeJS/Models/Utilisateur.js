const mongoose = require('mongoose');
const { Schema } = mongoose;
const Histo =  new mongoose.Schema(
    {
        Categorie:{
            type: Schema.Types.ObjectId, ref: 'Categorie',
        },
        Quantite:{
            type : Number,
        },
    }
);


const Utilisateur = new mongoose.Schema(
    {
        Nom: {
            type: String,
            required: true,
            unique: true,
        },
        mdp: {
            type: String,
            required: true
        },
        Image: {
            type: [String]
        },
        Points: {
            type: Number,
        },
        History: {
            type: [Histo]
        },
    }
);
module.exports = mongoose.model('Utilisateur', Utilisateur);
