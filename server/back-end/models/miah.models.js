const sql = require("./db.js");
const { response } = require("express");

// user
const User = function (user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.dob = user.dob;
    this.email = user.email;
    this.passowrd = user.passowrd;
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created user: ", { id: res.insertID, newUser });
        result(null, { id: res.insertID, newUser });
    });
};

module.exports = User;