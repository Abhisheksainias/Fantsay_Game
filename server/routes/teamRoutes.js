const express = require('express');
const Team = require('../models/teamSchema');
const Player = require('../models/playesSchema');
const router = express.Router();


// create a new team
router.post('/', async (req, res) => {
    const { teamName, players, name } = req.body;
    // console.log(teamName, players)

    try {
        const team = new Team({ teamName, players, name });
        const newTeam = await team.save();
        // console.log("newTeam is :", newTeam)

        res.status(201).json(newTeam);
    } catch (error) {
        res.status(400).json({ message: ErrorEvent.message })
    }
});


// Get a specific team by Id

router.get('/:id', async (req, res) => {
    try {
        const team = await Team.findById(req.params.id).populate('players');
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.json(team);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// get all teams

router.get('/', async (req, res) => {
    try {
        const teams = await Team.find().populate('players');
        res.json(teams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router