const sql = require("./db.js");
const { response } = require("express");

// Word
const Word = function (word) {
    this.word_name = word.name;
    this.created_at = Date.now()// add new timestamp ;
    this.updated_at = Date.now()// add new timestamp ;
    this.use_yn = word.use_yn;
    this.word_icon = word.word_icon;
    this.category_idx = word.category_idx;
};

// Adds the word to the word database
Word.create = (newWord, result) => {
    sql.query("INSERT INTO words SET ?", newWord, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    });
};

// Finds the word from the word database using the word_idx 
Word.findById = (id,result)=>{
    sql.query("SELECT * from words where word_idx = ?", id, (err, res) => {
        if(err){
            console.log("error: ", err); 
            result(err,null);
            return; 
        }
        console.log("Word by Id: ", {res});
        result(null,res);
    })
}

// Deletes the word from the words dataset using the word_idx
Word.delete = (id, result) => {
    sql.query("Delete from words where word_idx = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Deleted word: ",{res});
        result(null,res);
    });
};

module.exports = Word;