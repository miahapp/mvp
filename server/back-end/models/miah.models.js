const sql = require("./../../server");
const { response } = require("express");
const bodyParser = require("body-parser");

// user
const User = function (user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.dob = user.dob;
    this.email = user.email;
    this.password = user.password;
};

module.exports = User;