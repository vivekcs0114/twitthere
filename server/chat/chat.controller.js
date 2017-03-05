/**
 * Created by VIVEK on 3/4/2017.
 */
var mongoose = require('mongoose');
var Chat = require('./chat.model.js');


exports.getMessage = function (req, res){

  Chat.find({'from':req.headers['name'],'to':req.body.to},function(err, data){
        if(err){
            return res.json({'message':err});
        }
        return res.json({'response':data});
    });

}

exports.sendMessage = function (req, res){
    var chat=new Chat();
    chat.from=req.headers['name'];
    chat.message=req.body.message;
    chat.to=req.body.to;

    chat.save(function (err) {
        if(err){
            return res.json({'message':err});
        }
        return res.json({'message ':'send succesfully'});
    });
}