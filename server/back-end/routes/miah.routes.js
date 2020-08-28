const miahController = require("../controllers/miah.controllers.js");
const wordController = require("../controllers/WordControllers.js");
module.exports = app => {
    // Create a new user
    // app.post("/api/create_user", miahController.create_user);
    app.post('/api/register', miahController.register);
    app.post('/api/login', miahController.login);
    app.post('/api/addWord', wordController.addWord);
    app.get('/api/allWord', wordController.allWord);
    app.get('/api/findById', wordController.findById);
    app.get('/api/findByName', wordController.findByName);
    app.post('/api/delete', wordController.delete);
    app.post('/api/update', wordController.update);
};


