/**
 * Created by VIVEK on 3/4/2017.
 */

var user_controller = require("./user.controller.js");

module.exports = function (app) {

    app.get("/api/user", user_controller.getUser);
    app.post("/api/user", user_controller.addUser);
};