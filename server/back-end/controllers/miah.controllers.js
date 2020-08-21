const User = require("../models/miah.models");
const connection = require("../../server");
const bcrypt = require("bcrypt");


module.exports.register = function (req, res) {
    var today = new Date();
    var pwd = req.body.password;
    // encrypted_password = bcrypt.hashSync(pwd, 10);
    var user = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "dob": today,
        "email": req.body.email,
        "password": pwd,
    };

    connection.query('INSERT INTO user SET ?', user, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
            console.log("Error:", error);
            console.log(req.body)
        } else {
            res.json({
                status: true,
                data: results,
                message: 'user registered sucessfully'
            });
        };
    });
};