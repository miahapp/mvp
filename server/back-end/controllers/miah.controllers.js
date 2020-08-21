const User = require("../models/miah.models.js");
const Word = require("../models/wordmodel.js");
const connection = require("../../server");
const bcrypt = require("bcrypt");

// Create and save new User
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

    const Word = new Word({
        word_name = req.body.word_name, 
        created_at = Date.now(),//add timestamp
        updated_At = Date.now(),//add timestamp 
        use_yn = req.body.use_yn,
        word_icon = req.body.word_icon,
        category_idx = req.body.category_idx
    })

    // allows the user to add word to the database
    Word.create(word, (err, word) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Error occured while inserting word"
            });
        }
        else res.send(word);
    });

    // allows the user to view the word given the word_idx
    Word.findById(id, (err, word) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Error occured while finding word"
            });
        }
        else res.send(word);
    });

    // allows the user to delete the word given it's word_idx
    Word.delete(id, (err, word) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Error occured while deleting word"
            });
        }
        else res.send(word);
    });