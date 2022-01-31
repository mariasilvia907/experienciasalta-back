const {Schema, model} = require('mongoose');

const Experience = Schema({
    name : {
        type: String,
        required: true        
        },
    description: {
        type: String,
        required: true
    },
    img: { 
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    }

});

module.exports = model ('Experience', Experience);