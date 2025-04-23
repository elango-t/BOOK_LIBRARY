const mongoose = require("mongoose");
const db = require('../config/db');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
const userModel = mongoose.model('signup', userSchema);

module.exports = userModel;
