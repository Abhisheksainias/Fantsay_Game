const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    players: [
        String,

    ],
});

const Team = mongoose.model('Teams', teamSchema)

module.exports = Team;