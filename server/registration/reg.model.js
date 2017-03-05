/**
 * Created by VIVEK on 3/4/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RegSchema = new Schema({
    name : String,
    mobile : String,
    email : String,
    password : String,
});

module.exports = mongoose.model('Reg', RegSchema);