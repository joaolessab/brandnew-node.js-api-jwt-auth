// Importing Dependencies
require("dotenv").config();
require("./config/database").connect();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/user");
const auth = require("./middlewares/auth");

// Creating Express Instance
const express = require("express");
const app = express();
app.use(express.json());

// Registering New User
app.post("/register", async (req, res) => {
    try {
        // Gets user input
        const { first_name, last_name, email, password } = req.body;
        
        // Validates user input
        if (!(email && password && first_name && last_name)) {
            res.status(400).send("All input is required");
        }
  
        // Checks if the user already exists
        // Validates if user exists in our database
        const oldUser = await User.findOne({ email });
    
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }
  
        //Encrypts user password
        const encryptedPassword = await bcrypt.hash(password, 10);
    
        // Creates user in our database
        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });
  
        // Creates token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
            expiresIn: "2h",
            }
        );

        // saves user token
        user.token = token;
    
        // returns new user
        res.status(201).json(user);
    } 
    catch (err) {
        console.log(err);
    }
});
    
// Login with User Created
app.post("/login", async (req, res) => {
    try {
        // Gets user input
        const { email, password } = req.body;

        // Validates user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }

        // Validates if user exists in our database
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
            );

            // saves user token
            user.token = token;

            // user being retrieved
            res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
    }
    catch (err) {
        console.log(err);
    }
});

// Welcome request to test JWT
app.get("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});

module.exports = app;