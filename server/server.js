const express = require("express");
const app = express();
const bodyParser = require('body-parser');
require("./back-end/routes/miah.routes")(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('dotenv').config();
const mysql = require("mysql");


// const session = require("express-session");
// app.use(
//   session({
//     secret: "keyboardkitteh",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 },
//   })
// );

// Creating databse connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB
});

// Connecting to database
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database!");
});
module.exports = connection;

// Simple route
app.get("/", (req, res) => {
  console.log("Welcome to miah");
  res.json({ message: "Welcome to miah" });
});

// Register route
app.post('/api/register', registerController.register);



// Port 
app.listen(8000, () => console.log("listening on port 8000"));