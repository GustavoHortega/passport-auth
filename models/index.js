const mongoose = require('mongoose');

const usuarioSchema = require('./usuario');

const Usuario = require = mongoose.model('Usuario', usuarioSchema);

const connectDataBase = () => {
    mongoose.connect('mongodb://localhost:27017/passport_auth');
    
}

module.exports = {
    connectDataBase,
    Usuario,
}