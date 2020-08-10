require('dotenv').config()
const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Creating databse connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: dbConfig.DB
});

// Connecting to database
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to database!");
});

module.exports = connection;