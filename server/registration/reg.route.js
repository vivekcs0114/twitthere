/**
 * Created by VIVEK on 3/4/2017.
 */

var reg_controller = require("./reg.controller.js");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
        res.setHeader('Access-Control-Allow-Methods', 'X-Requested-With,Content-Type,Authorization');
        next();
    });

    app.get("/api/getRecord", reg_controller.getRecord);
    app.post("/api/sendRecord", reg_controller.sendRecord);
}