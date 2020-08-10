const express = require("express");
const app = express();
// const session = require("express-session");
// app.use(
//   session({
//     secret: "keyboardkitteh",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 },
//   })
// );

// Database
// var mysql = require('mysql');

// Creating database connection
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'upland91786',
//   database: 'miah'
// });

// Connecting to database
// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// Simple route
app.get("/", (req, res) => {
  console.log("Welcome to miah");
  res.json({ message: "Welcome to miah" });
});

// Port 
app.listen(8000, () => console.log("listening on port 8000"));