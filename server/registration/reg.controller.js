/**
 * Created by VIVEK on 3/4/2017.
 */
var mongoose = require('mongoose');
var Reg = require('./reg.model.js');


exports.getRecord = function (req, res){

    Reg.find(function(err, data){
        if(err){
            return res.json({'message':err});
        }
        return res.json({'response':data});
    });

};

exports.sendRecord = function (req, res){
    var reg=new Reg();
    reg.name=req.body.name;
    reg.mobile=req.body.mobile;
    reg.email=req.body.email;
    reg.password=req.body.password;

    reg.save(function (err) {
        if(err){
            return res.json({'message':err});
        }
        return res.json({'message ':'send succesfully'});
    });
};