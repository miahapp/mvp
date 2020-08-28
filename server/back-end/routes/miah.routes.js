const miahController = require("../controllers/miah.controllers.js");
module.exports = app => {
    // Create a new user
    // app.post("/api/create_user", miahController.create_user);
    app.post('/api/register', miahController.register);
    app.post('/api/login', miahController.login);
    app.post('/api/click', miahController.click);
};


