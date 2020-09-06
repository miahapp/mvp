const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//restricting the request to just
app.use(
  cors({
    origin: `http://localhost:${process.env.PORT}`,
  })
);

// Simple route
app.get("/", (request, response) => {
  response.json({
    info: "Mvp example running Node.js, Express, and Postgres API",
  });
});

require("./back-end/routes/postgresRoutes")(app);

// Port
app.listen(8000, () => console.log("listening on port 8000"));
