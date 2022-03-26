const mongoose = require('mongoose');
const { Schema } = mongoose;
const Rewards = new mongoose.Schema(
    {
        Nom: {
            type: String,
            required: true,
            unique: true,
        },
        Image: {
            type: [String]
        },
        Points: {
            type: Number,
        }, 
        Description:{
            type:String,
        }
    }
);
module.exports = mongoose.model('Rewards', Rewards);
