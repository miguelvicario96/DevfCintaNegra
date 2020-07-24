const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    subtotal:{
        type: Number,
        required: true
    },
    iva: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    articulos: {
        type: [Number],
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;