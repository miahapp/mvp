const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
mongoose.connect("mongodb://localhost/rate_my_cakes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
