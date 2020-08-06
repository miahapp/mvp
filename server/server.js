const express = require("express");
const app = express();
const session = require("express-session");
app.use(
  session({
    secret: "keyboardkitteh",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

//Database
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);

//Port
app.listen(8000, () => console.log("listening on port 8000"));
