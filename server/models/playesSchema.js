const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
})

const Player = mongoose.model('Players', playerSchema)

module.exports = Player;