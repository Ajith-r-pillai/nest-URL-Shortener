# Minify - URL Shortener Project

Minify is a URL shortener project with a ReactJS front end, NestJS back end, JWT authentication, and utilizes the node-url-shortener package for URL shortening.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Endpoints](#endpoints)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

Ensure you have Node.js and npm installed for both the client and server.

### Client (ReactJS)

Navigate to the client directory:


cd client

., [11-12-2023 12:46]
# Minify - URL Shortener Project

Minify is a URL shortener project with a ReactJS front end, NestJS back end, JWT authentication, and utilizes the node-url-shortener package for URL shortening.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Endpoints](#endpoints)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

Ensure you have Node.js and npm installed for both the client and server.

### Client (ReactJS)

Navigate to the client directory:

cd client

Install dependencies:
npm install

Start the React app:
npm start

Server (NestJS)

Navigate to the 'server' directory:
cd server

Install dependencies:
npm install

Features

User Registration and Login

• JWT Token Authentication

• URL Shortening with 'node-url-shortener

Input Validation using class-validator (on the server side)

Front-end Validation for Improved User Experience

Endpoints

Describe your API endpoints and how to use them. Provide examples.

• POST /auth/register Register a new user.
Register a new user.

Example Request:

json

{
"username": "john_doe",

"email": "john@example.com",

"password": "securepassword"
}

Example Response:

json



{ "message": "User registered successfu }

• POST /auth/login

Log in and receive a JWT token.

Example Request:

json

{
"email": "joh@example.com",

"password": "securepassword"
}
Example Response:

json

{
"token": "yourjsonwebtokenhere"
}

• POST /url-shortener/shorten

Shorten a URL.

Example Request:

json

{

Copy code

"longUrl": "https://www.example.com"

}

