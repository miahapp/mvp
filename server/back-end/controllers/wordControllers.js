const User = require("../models/miah.models");
const connection = require("../../server");

module.exports.addWord = function (req, res) {
    word_name = req.word_name;
    // Checking if word already exists
    connection.query('SELECT * FROM words WHERE word_name  = ?', [word_name], function (error, results) {
        if (results.length == 1) {
            res.json({
                status: false,
                message: 'word already exists in the database'
            });
        } else {
            var word = {
                "word_name": req.body.first_name,
                "created_at": Date.now(),
                "updated_at": Date.now(),
                "use_yn": req.body.use_yn,
                "word_icon": req.word_icon,
                "category_idx": req.category_idx,
            };
            // Stores word into DB
            connection.query('INSERT INTO words SET ?', word, function (error, results) {
                if (error) {
                    res.json({
                        status: false,
                        message: 'Unable to enter the word to the database'
                    })
                    console.log("Error:", error);
                } else {
                    res.json({
                        status: true,
                        data: results,
                        message: 'Word entered to the database sucessfully'
                    });
                }
            });
        }
    });
};


module.exports.allWord = function (req, res) {
    connection.query('SELECT * from words', function (error, results) {
        if (error) {
            res.json({
                status: false,
                message: 'Unable to query the database'
            })
            console.log('Error: ', error);
        } else {
            res.json({
                status: true,
                data: results,
                message: "All the words stored in the database"
            })
        }
    })
}


module.exports.findById = function (req, res) {
    connection.query('SELECT * from words where word_idx = ?', req.word_idx, function (error, results) {
        if (error) {
            res.json({
                status: false,
                message: 'Unable to query the database'
            })
            console.log('Error: ', error);
        } else {
            res.json({
                status: true,
                data: results,
                message: "Word with the given id"
            })
        }
    })
}

module.exports.findByName = function (req, res) {
    connection.query('SELECT * from words where word_name = ?', req.word_name, function (error, results) {
        if (error) {
            res.json({
                status: false,
                message: 'Unable to query the database'
            })
            console.log('Error: ', error);
        } else {
            res.json({
                status: true,
                data: results,
                message: "Word with the given word_name"
            })
        }
    })
}

module.exports.delete = function (req, res) {
    connection.query('Delete from words where word_idx = ?', req.word_idx, function (error, results) {
        if (error) {
            res.json({
                status: false,
                message: 'Unable to query the database'
            })
            console.log('Error: ', error);
        } else {
            res.json({
                status: true,
                message: "Word deleted from database"
            })
        }
    })
}

module.exports.update = function (req, res) {
    connection.query('Update words SET category_idx = ? where word_idx = ?', req.category_idx, req.word_idx, function (error, results) {
        if (error) {
            res.json({
                status: false,
                message: 'Unable to query the database'
            })
            console.log('Error: ', error);
        } else {
            res.json({
                status: true,
                message: "Word updated in the database"
            })
        }
    })
}