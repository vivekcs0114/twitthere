var mongoose = require('mongoose');
var User = require('./user.model.js');


exports.getUser = function (req, res) {

    User.find(function (err, data) {
        if (err) {
            return res.send(err);
        }
        return res.send(data);
    });
}

exports.addUser = function (req, res) {

    var user = new User();
    user.name = req.body.name;
    user.emailId = req.body.emailId;
    user.password = req.body.password;

    user.save(function (err) {
        if (err) {
            return res.json({'message': err});
        }
        return res.json({'response': "User successfully saved into the database."});
    });
}