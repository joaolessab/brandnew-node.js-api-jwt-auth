# NODE.JS API with JWT Auth
 
## What is authentication and authorization
Authentication and authorization are used in security, particularly when it comes to getting access to a system. Yet, there is a significant distinction between gaining entry into a house (authentication) and what you can do while inside (authorization).

### Authentication
Authentication is the process of verifying a user’s identification through the acquisition of credentials and using those credentials to confirm the user’s identity. The authorization process begins if the credentials are legitimate. The authorization process always follows the authentication procedure.

You were already aware of the authentication process because we all do it daily, whether at work (logging into your computer) or at home (logging into a website). Yet, the truth is that most “things” connected to the Internet require you to prove your identity by providing credentials.

### Authorization
Authorization is the process of allowing authenticated users access to resources by determining whether they have system access permissions. By giving or denying specific licenses to an authenticated user, authorization enables you to control access privileges.

So, authorization occurs after the system authenticates your identity, granting you complete access to resources such as information, files, databases, funds, places, and anything else. That said, authorization affects your capacity to access the system and the extent to which you can do so.

### What is JWT
JSON Web Tokens (JWT) are an RFC 7519 open industry standard for representing claims between two parties. For example, you can use jwt.io to decode, verify, and produce JWT.

JWT specifies a compact and self-contained method for communicating information as a JSON object between two parties. Because it is signed, this information can be checked and trusted. JWTs can be signed using a secret (using the HMAC algorithm) or an RSA or ECDSA public/private key combination. In a moment, we’ll see some examples of how to use them.

## Requirements
Node.js
## Steps to Reproduce this code from scratch (on your own)
1. Open your terminal or favorite code editor

2. Create a directory and initialize
```bash
# Create a directory
$ mkdir app
# Enter the folder created
$ cd app
# Initialize NPM
$ npm init -y
```