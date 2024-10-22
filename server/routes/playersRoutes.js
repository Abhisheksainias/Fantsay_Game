const express = require('express');
const Player = require('../models/playesSchema')
const router = express.Router();


// get all players
router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// add new player
router.post('/', async (req, res) => {
    const { name, position, points } = req.body;
    const player = new Player({ name, position, points });
    // (req.body)

    try {
        const newPlayer = await player.save();
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router