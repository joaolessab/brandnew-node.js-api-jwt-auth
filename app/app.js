// Importing Dependencies
require("dotenv").config();

const express = require("express");
const database = require("./config/database");

// Creating Express Instance
const app = express();
app.use(express.json());

// Connecting Database
database.connect();

// Importing Routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

module.exports = app;