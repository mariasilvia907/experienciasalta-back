const {Schema, model} = require('mongoose');

const contactoSchema = new Schema({
    empresa: { 
        type: String,
        required: true
    },    

    correo: { 
        type: String,
        required: true,
    },   

    rubro: { 
        type: String,
        required: true,
    },

    mensaje: { 
        type: String,
        required: true,
    },    

    date: {
        type: Date,
        default: Date.now
    }
    
}, {
    timestamp: true,
});

module.exports = model('Contact', contactoSchema);