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

// User.create = (newUser, result) => {
//     var pwd = body.password;
//     body.password = bcrypt.hashSync(pwd, 10);

//     sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }
//         console.log("created user: ", { id: res.insertID, newUser });
//         result(null, { id: res.insertID, newUser });
//     });
// };

module.exports = User;