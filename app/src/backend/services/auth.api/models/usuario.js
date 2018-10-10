'use strict';

var mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nome: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    hash_password: {
        type: String,
        required: true
    },
    roles: [],
    created: {
        type: Date,
        default: Date.now
    }
});

UsuarioSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
}

mongoose.model('Usuario', UsuarioSchema);