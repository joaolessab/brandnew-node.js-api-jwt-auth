require("dotenv").config();
require("./config/database").connect();

const User = require("./model/user");
const express = require("express");
const app = express();

app.use(express.json());

// Register
app.post("/register", (req, res) => {
    // our register logic goes here...
});
    
// Login
app.post("/login", (req, res) => {
    // our login logic goes here
});

module.exports = app;