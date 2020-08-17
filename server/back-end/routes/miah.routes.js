const User = require("../controllers/miah.controllers.js");
module.exports = app => {
    // Create a new user
    app.post("/api/users", User.create);
};

require("./miah.routes.js")(app);
// app.listen();