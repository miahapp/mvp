const express = require("express");
const bodyParser = require('body-parser');

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Simple route
app.get("/", (req, res) => {
  console.log("Welcome to miah");
  res.json({ message: "Welcome to miah" });
});


// Port 
app.listen(3000, () => console.log("listening on port 3000"));