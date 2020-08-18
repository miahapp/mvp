const User = require("../models/miah.models.js");
const Word = require("../models/wordmodel.js");
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
    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Error occured while creating user"
            });
        }
        else res.send(data);
    });

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
};