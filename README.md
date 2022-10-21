<h1 align='center'>Node.js API with JWT Auth</h1>
<h4 align='center'>> 🔒 A simple Node.js API that connects to MongoDB,<br/>generates and throws back a JWT Token to the final endpoint</h4>

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
  <a href="#-how-to-run-this-project-locally">How to: Run this project locally</a>
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
4. Open the address: `http://localhost:4001` to test the API's call
- The server and the database should be running without any crashing
- Check the image below:
<img src="https://raw.githubusercontent.com/joaolessab/brandnew-node.js-api-jwt-auth/main/repo/node-running.png" width="437px" height="111px">
