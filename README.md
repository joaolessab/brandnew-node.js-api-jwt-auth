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
1. Navigate to the **"app"** folder
2. Run `npm install`
3. Run `node server.js`
4. Open the address: "http://localhost:4001" to test the API

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
3. Create these directories inside the **"app"** folder: 
- "model"
- "middleware"
- "config"
```bash
$ mkdir model middleware config
```

<!-- Line break -->
4. Inside the **"app"** folder, create these files:
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
6. Install Dependencies inside the project (**"app"** folder):
```bash
npm install mongoose express jsonwebtoken dotenv bcryptjs dotenv
npm install nodemon -D
npm install nodemon -g
```
<!-- Line break -->
7. Create a Node.js server and connect your database. **How? Check these file on the repo:**
- "database.js"
- "app.js"
- "index.js"
- ".env" (You need to create this one) in the **"app"** folder

8. To start the server:
- Edit the **"scripts"** key in the **"package.json"** to look like the same as it is on this repository
- Point to the MongoDB connection URL inside the **".env"** file to your actual MongoDB connection. [(Check docs here)](https://www.mongodb.com/docs/atlas/connect-to-database-deployment/#connect-to-a-cluster)
- Navigate to the **"app"** folder
- Run `npm run dev`
- The server and the database should be running without any crashing