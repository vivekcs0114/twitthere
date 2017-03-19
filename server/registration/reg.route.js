/**
 * Created by VIVEK on 3/4/2017.
 */

var reg_controller = require("./reg.controller.js");

module.exports = function (app) {

    app.get("/api/record", reg_controller.getRecord);
    app.post("/api/record", reg_controller.sendRecord);
}