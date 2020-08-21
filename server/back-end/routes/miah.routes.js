const maihController = require("../controllers/miah.controllers.js");
module.exports = app => {
    // Create a new user
    app.post("/api/register", maihController.register);
};

// require("./miah.routes.js")(app);
// app.listen();