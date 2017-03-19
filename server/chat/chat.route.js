/**
 * Created by VIVEK on 3/4/2017.
 */

var chat_controller = require("./chat.controller.js");

module.exports = function (app) {

    app.post("/api/message", chat_controller.getMessage);
    app.post("/api/message", chat_controller.sendMessage);
}