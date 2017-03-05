/**
 * Created by VIVEK on 3/4/2017.
 */

var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var morgan=require('morgan');
var mongoose=require('mongoose');
var confData=require('./config');
var path=require('path');
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/client', express.static(path.join(__dirname, 'client')));
mongoose.connect(confData.db);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));//static contents
require('./server/user/user.route')(app,express);
require('./server/chat/chat.route')(app,express);
require('./server/registration/reg.route')(app,express);

app.get('/',function (req,res) {
    res.sendfile(__dirname+"/client/"+"index.html");
});

app.post('/',function (req,res) {
    res.json({"message":"post method is found"})
});
app.listen(confData.port,function () {
    console.log("server in running on port"+confData.port);
});
