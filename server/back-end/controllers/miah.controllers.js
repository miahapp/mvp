const User = require("../models/miah.models");
const connection = require("../../server");
const bcrypt = require("bcrypt");


module.exports.register = function (req, res) {
    var email = req.body.email;
    // Checking if email already exists
    connection.query('SELECT * FROM user WHERE email = ?', [email], function (error, results, fields) {
        if (results.length == 1) {
            res.json({
                status: false,
                message: 'email already exists'
            });
        } else {
            var pwd = req.body.password;
            // Creates hash
            bcrypt.hash(pwd, 10, function (err, hash) {
                var user = {
                    "first_name": req.body.first_name,
                    "last_name": req.body.last_name,
                    "dob": req.body.dob,
                    "email": req.body.email,
                    "password": hash,
                };
                // Stores user with hashed password into DB
                connection.query('INSERT INTO user SET ?', user, function (error, results, fields) {
                    if (error) {
                        res.json({
                            status: false,
                            message: 'error with query'
                        })
                        console.log("Error:", error);
                    } else {
                        res.json({
                            status: true,
                            data: results,
                            message: 'user registered sucessfully'
                        });
                    }
                });
            });
        }
    });
};

module.exports.login = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    // Finds user with matching email
    connection.query('SELECT * FROM user WHERE email = ? LIMIT 1', [email], function (error, results, fields) {
        if (results.length == 0) {
            res.json({
                status: false,
                message: "No user"
            })
        } else {
            // Validates password
            bcrypt.compare(password, results[0].password, function (error, results) {
                if (results == true) {
                    res.json({
                        status: true,
                        message: "Successfully logged in"
                    })
                } else {
                    res.json({
                        status: false,
                        message: "Incorrect password"
                    })
                }
            });
        }
    });
};
