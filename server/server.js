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

// Simple route
app.get("/", (req, res) => {
  console.log("Welcome to miah");
  res.json({ message: "Welcome to miah" });
});

// Port 
app.listen(8000, () => console.log("listening on port 8000"));