const mongoose = require("mongoose");
const URL = process.env.MONGO_URL || "mongodb+srv://abhisheksaini4952:FfSleUFvfPNANa5912@cluster0.abrnx.mongodb.net/fantasyGame"

const connectDB = () => {
    mongoose
        .connect(URL)
        .then(() => console.log("connected to database sucessfully"))
        .catch((err) => console.log("erroe in database connectivity", err));
};

module.exports = connectDB;