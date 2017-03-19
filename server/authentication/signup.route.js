/**
 * Created by VIVEK on 3/5/2017.
 */

var signup_controller = require('./signup.controller');
module.exports = function (app) {


    app.post('/api/signup', signup_controller.add);
}