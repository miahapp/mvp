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

<<<<<<< HEAD
// User.create = (newUser, result) => {
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
=======
const Word = function (word) {
    this.word_name = word.word_name;
    this.created_at = Date.now()// add new timestamp ;
    this.updated_at = Date.now()// add new timestamp ;
    this.use_yn = word.use_yn;
    this.word_icon = word.word_icon;
    this.category_idx = word.category_idx;
}
>>>>>>> master

module.exports = User;
module.exports = Word;