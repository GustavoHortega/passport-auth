const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema =  new Schema({
    nome:{
        type: String,
        required: true,

    },
    email:{
        type: String,
        required: true,
        unique: true,
        validator: function(v) { 
            return v.match('@');
        },
        message: props => `${props.value} não é um e-mail válido.`

    },
    senha:{
        type: String,
        required: true

    },

});

module.exports = usuarioSchema;