module.exports = app => {
    const User = require("../controllers/miah.controllers.js");

    // Create a new user
    app.post("/users", User.create);
};

require("./miah.routes.js")(app);
app.listen();