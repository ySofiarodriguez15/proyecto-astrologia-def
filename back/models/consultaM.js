const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const consultaSchema = new Schema({
    nombre: {
        type: 'string',
        required: true
    },
    apellido: {
        type: 'string',
        required: true
    },
    motivo: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    }
});

const Consulta = mongoose.model('consulta', consultaSchema);

module.exports = Consulta;