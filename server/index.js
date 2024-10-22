const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config()
const port = process.env.PORT || 8888;


// middleware

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = require('./config/dbConfig');
connectDB();

// Define Routes
const playersRoutes = require('./routes/playersRoutes');
const teamsRoutes = require('./routes/teamRoutes');


app.use('/api/players', playersRoutes);
app.use('/api/teams', teamsRoutes);



app.listen(port, () => console.log(`Server running on port ${port}`));