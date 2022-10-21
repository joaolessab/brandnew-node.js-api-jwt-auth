require("dotenv").config();
require("./config/database").connect();

const User = require("./model/user");
const express = require("express");

const app = express();
app.use(express.json());

// Register new user
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
      encryptedPassword = await bcrypt.hash(password, 10);
  
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
    
// Login
app.post("/login", (req, res) => {
    // our login logic goes here
});

module.exports = app;