const User = require("../models/miah.models");
const connection = require("../../server");
const bcrypt = require("bcrypt");


module.exports.register = function (req, res) {
    var today = new Date();
    var pwd = body.password;
    body.password = bcrypt.hashSync(pwd, 10);
    var users = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "email": req.body.email,
        "password": body.password,
        "created_at": today,
        "updated_at": today
    };
    connection.query('INSERT INTO users SET ?', users, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        } else {
            res.json({
                status: true,
                data: results,
                message: 'user registered sucessfully'
            });
        };
    });
};
