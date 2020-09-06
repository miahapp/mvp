const postgres = require("../routes/config");
const pool = require("../routes/config");

//Get all the words stored in the database
const getWords = (request, response) => {
  pool.query("SELECT * FROM words ORDER BY word_id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

//Add word to the words database
const addWord = (req, response) => {
  var word_name = req.body.word_name;
  var use_yn = "T";
  var word_icon = null;
  var category_id = req.body.category_id;
  pool.query(
    "INSERT INTO words(word_name, use_yn, word_icon, category_id) VALUES ($1, $2, $3, $4)",
    [word_name, use_yn, word_icon, category_id],
    (error, results) => {
      if (error) {
        console.log(error);
        response.json({
          status: 410,
          message: "error inserting the user to the database",
          error: error,
        });
      } else {
        response.status(200).json(results.rows);
      }
    }
  );
};

// Get a particular word from the word table
const wordById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(
    "Select * from words where word_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json(result.rows);
    }
  );
};

//Delete a word from the words table
const deleteWord = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query("DELETE FROM words WHERE word_id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Word deleted with ID: ${id}`);
  });
};

module.exports = {
  getWords,
  deleteWord,
  wordById,
  addWord,
};
