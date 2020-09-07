const bcrypt = require("bcrypt");
const pool = require("../routes/config");

// GET all users from the database
const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY user_id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

//Adding a new user to the database
const addUser = (req, response) => {
  var email = req.body.email;
  pool.query(
    "Select * from users where email = $1",
    [email],
    (error, results) => {
      if (results.rows.length > 0) {
        response.json({
          status: 400,
          message: "email already exists",
        });
        return;
      } else {
        var pwd = req.body.password;
        console.log(pwd);
        var pwdhash = "clear";
        bcrypt.hash(pwd, 10, (err, hash) => {
          if (err) {
            console.log("bcypt gave an error");
            return;
          } else {
            pwdhash = hash;
            var first = req.body.first_name;
            var last = req.body.last_name;
            var dob = req.body.dob;
            pool.query(
              "INSERT INTO users(first_name, last_name, dob, email, password) VALUES ($1, $2, $3, $4, $5)",
              [first, last, dob, email, pwdhash],
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
          }
        });
      }
    }
  );
};

// Checking if the person should be given an entry to the system
const login = (request, response) => {
  var email = request.body.email;
  var pwd = request.body.password;
  pool.query(
    "Select * from users where email = $1",
    [email],
    (error, result) => {
      if (result.rows.length == 0) {
        response.json({
          status: 410,
          message: "User not found",
        });
      } else {
        bcrypt.compare(pwd, result.rows[0].password, function (err, isMatch) {
          if (err) {
            throw err;
          } else if (!isMatch) {
            response.json({
              status: 400,
              message: "Invalid Credentials",
            });
          } else {
            response.json({
              status: 200,
              message: "User has successfully logged in",
            });
          }
        });
      }
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE user_id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  addUser,
  getUsers,
  deleteUser,
  login,
};
