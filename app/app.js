// Importing Dependencies
require("dotenv").config();

const express = require("express");
const db = require("./config/database");
const auth = require("./middlewares/auth");

// Creating Express Instance
const app = express();
app.use(express.json());

// Connecting Database
db.connect();

// Importing Routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app, auth);

module.exports = app;