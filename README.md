<h1 align='center'>Node.js API with JWT Auth</h1>
<h4 align='center'>> 🔒 A simple Node.js API that connects to MongoDB, generates and throws back a JWT Token to the final endpoint</h4>

<div align="center">

[![GitHub license](https://img.shields.io/github/license/joaolessab/brandnew-node.js-api-jwt-auth)](https://img.shields.io/github/license/joaolessab/brandnew-node.js-api-jwt-auth)
[![GitHub repo size](https://img.shields.io/github/repo-size/joaolessab/brandnew-node.js-api-jwt-auth)](https://img.shields.io/github/repo-size/joaolessab/brandnew-node.js-api-jwt-auth)
[![GitHub stars](https://img.shields.io/github/stars/joaolessab/brandnew-node.js-api-jwt-auth)](https://img.shields.io/github/stars/joaolessab/brandnew-node.js-api-jwt-auth)
[![GitHub forks](https://img.shields.io/github/forks/joaolessab/brandnew-node.js-api-jwt-auth)](https://img.shields.io/github/forks/joaolessab/brandnew-node.js-api-jwt-auth)
  
[![GitHub issues](https://img.shields.io/github/issues/joaolessab/brandnew-node.js-api-jwt-auth)](https://img.shields.io/github/issues/joaolessab/brandnew-node.js-api-jwt-auth)
[![GitHub contributors](https://img.shields.io/github/contributors/joaolessab/brandnew-node.js-api-jwt-auth)](https://img.shields.io/github/contributors/joaolessab/brandnew-node.js-api-jwt-auth)
[![GitHub last commit](https://img.shields.io/github/last-commit/joaolessab/brandnew-node.js-api-jwt-auth)](https://img.shields.io/github/last-commit/joaolessab/brandnew-node.js-api-jwt-auth)
[![GitHub language count ](https://img.shields.io/github/languages/count/joaolessab/brandnew-node.js-api-jwt-auth)](https://img.shields.io/github/languages/count/joaolessab/brandnew-node.js-api-jwt-auth)

<p>
  <a href="#-whats-authentication-and-authorization">What's Authentication and Authorization</a> •
  <a href="#-what-is-jwt">What is JWT</a> •
  <a href="#-project-requirements">Project Requirements</a> •
  
  <a href="#-how-to-run-this-project-locally">How to: Run this project locally</a> •
  <a href="#-how-to-recreate-this-code-from-scratch-on-your-own">How to: Recreate this code from scratch (on your own)</a>
</p>

<br/>

<p>Made with ❤️ by João Vitor Lessa - 👏🏻 <a href="https://www.linkedin.com/in/jvitorlb/">Get in Touch!</a></p>
<p>Hit the ⭐️ button if you like this project!</p>

</div>

<br/>

## • What's Authentication and Authorization
Authentication and authorization are used in security, particularly when it comes to getting access to a system. Yet, there is a significant distinction between gaining entry into a house (authentication) and what you can do while inside (authorization).

### Authentication
Authentication is the process of verifying a user’s identification through the acquisition of credentials and using those credentials to confirm the user’s identity. The authorization process begins if the credentials are legitimate. The authorization process always follows the authentication procedure.

You were already aware of the authentication process because we all do it daily, whether at work (logging into your computer) or at home (logging into a website). Yet, the truth is that most “things” connected to the Internet require you to prove your identity by providing credentials.

### Authorization
Authorization is the process of allowing authenticated users access to resources by determining whether they have system access permissions. By giving or denying specific licenses to an authenticated user, authorization enables you to control access privileges.

So, authorization occurs after the system authenticates your identity, granting you complete access to resources such as information, files, databases, funds, places, and anything else. That said, authorization affects your capacity to access the system and the extent to which you can do so.

## • What is JWT
JSON Web Tokens (JWT) are an RFC 7519 open industry standard for representing claims between two parties. For example, you can use jwt.io to decode, verify, and produce JWT.

JWT specifies a compact and self-contained method for communicating information as a JSON object between two parties. Because it is signed, this information can be checked and trusted. JWTs can be signed using a secret (using the HMAC algorithm) or an RSA or ECDSA public/private key combination. In a moment, we’ll see some examples of how to use them.

## • Project Requirements
Node.js

## • How to: Run this project locally
1. Navigate to the `app` folder
2. Run `npm install`
3. Run `node server.js`
4. Open the address: "http://localhost:4001" to test the API
- The server and the database should be running without any crashing
- Check the image below:
<img src="https://raw.githubusercontent.com/joaolessab/brandnew-node.js-api-jwt-auth/main/repo/node-running.png" width="437px" height="111px">

## • How to: Recreate this code from scratch (on your own)
1. Open your terminal or favorite code editor

<!-- Line break -->
2. Create a directory and initialize:
```bash
# Create a directory
$ mkdir app
# Enter the folder created
$ cd app
# Initialize NPM (this will create the "package.json")
$ npm init -y
```

<!-- Line break -->
3. Create these directories inside the `app` folder: 
- "model"
- "middleware"
- "config"
```bash
$ mkdir model middleware config
```

<!-- Line break -->
4. Inside the `app` folder, create these **empty** files:
- "app.js"
- "index.js"
- "->/model/user.js"
- "->/config/database.js"
- "->/middleware/auth.js"
```bash
$ touch app.js index.js config/database.js middleware/auth.js model/user.js
```

<!-- Line break -->
5. Check the directory to see if looks like this image below:
<img src="https://raw.githubusercontent.com/joaolessab/brandnew-node.js-api-jwt-auth/main/repo/project-structure.png" width="275px" height="220px">

<!-- Line break -->
6. Install Dependencies inside the project (`app` folder):
```bash
npm install mongoose express jsonwebtoken dotenv bcryptjs dotenv
npm install nodemon -D
npm install nodemon -g
```
<!-- Line break -->
7. Create these files to connect a Node.js server and connect your database

- "config/**database.js**" file:
```bash
const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI, {})
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
```

- root folder: **"app.js"**:
```bash
require("dotenv").config();
require("./config/database").connect();
const express = require("express");

const app = express();

app.use(express.json());

// Logic goes here

module.exports = app;
```

- root folder: **"index.js"**:
```bash
const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

-  "app/**.env**" file:
```bash
API_PORT=4001
MONGO_URI=mongodb+srv://{mongodb_username}:{mongodb_password}@{cluster_url}/?retryWrites=true&w=majority
```

8. To start the server:
- Edit the `scripts` key in the `package.json`:
```bash
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```
- Point to the MongoDB connection URL inside the `.env` file to your actual MongoDB connection. [(Check docs here)](https://www.mongodb.com/docs/atlas/connect-to-database-deployment/#connect-to-a-cluster)
- Navigate to the `app` folder
- Run `npm run dev`
- The server and the database should be running without any crashing
- Check the image below:
<img src="https://raw.githubusercontent.com/joaolessab/brandnew-node.js-api-jwt-auth/main/repo/node-running.png" width="437px" height="111px">

9. Create the **user model**:
- "model/**user.js**" file:
```bash
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);
```

10. Now, let's create the `user routes` for `register` and `login`.
- In the root folder, edit the file: **"app.js"**:
```bash
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
```