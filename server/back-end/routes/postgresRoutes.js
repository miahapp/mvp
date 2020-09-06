const userdb = require("../controllers/postgresUser.js");
const worddb = require("../controllers/postgresWord.js");

module.exports = app => {
    
    app.post('/users', userdb.addUser)
    app.get('/users',userdb.getUsers)
    app.delete('/users/:id',userdb.deleteUser)
    app.post('/users/login',userdb.login)
    app.get('/words',worddb.getWords)
    app.get('/words/:id',worddb.wordById)
    app.post('/words',worddb.addWord)
    app.delete('/words/:id',worddb.deleteWord)
};