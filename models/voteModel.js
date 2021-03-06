const mongoose = require('mongoose');

const voteModel = mongoose.model(
    "votes",
    {
        date: {
            type: Date,
            required: true
        },
        ip: {
            type: String,
            required: true
        },
        id_candidat: {
            type: String,
            required: true
        },
    },

);

module.exports = voteModel;
