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
    connection.query('SELECT * FROM user WHERE email = ? LIMIT 1', [email], function (error, i = results, fields) {
        if (i.length == 0) {
            res.json({
                status: false,
                message: "No user"
            })
        } else {
            // Validates password
            bcrypt.compare(password, i[0].password, function (error, results) {
                if (results == true) {
                    const accessToken = jwt.sign(i[0].user_idx, process.env.ACCESS_TOKEN_SECRET)
                    res.json({
                        status: true,
                        message: "Successfully logged in",
                        accessToken: accessToken
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

module.exports.click = function (req, res) {
    var testdate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    var words = req.body.sentence.split(' ');
    for (var i = 0; i < words.length; i++) {
        connection.query('SELECT * FROM words WHERE word_name = ?', words[i], function (error, results, fields) {
            if (results.length == 1) {
                var test = {
                    "user_idx": req.body.userID,
                    "clicked_at": testdate,
                    "word_idx": results[0].word_idx
                }
                connection.query('INSERT INTO clicks_log SET ?', test, function (error, results, fields) {
                })
            } else {
                console.log("Word not registered in database")
            }
        });
    }
    res.json({
        status: true,
        message: "Registered clicks!"
    })
};
