const User = require("../models/miah.models.js");
const bcrypt = require("bcrypt");

// Create and save new User
exports.create = (req, res) => {
    // Error message
    if (!req.body) {
        res.status(400).send({
            message: "Can not be empty!"
        });
    }

    // Create new User
    const User = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        dob: req.body.dob,
        email: req.body.email,
        password: req.body.password
    });

    // Save new User in database
    // User.create(user, (err, data) => {
    //     if (err) {
    //         res.status(500).send({
    //             message: err.message || "Error occured while creating user"
    //         });
    //     }
    //     else res.send(data);
    // });

    User.create = (newUser, result) => {
        var pwd = body.password;
        body.password = bcrypt.hashSync(pwd, 10);

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
};