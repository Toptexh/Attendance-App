const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    time:String,
    date: String
});

module.exports = mongoose.model("Student", studentSchema); 