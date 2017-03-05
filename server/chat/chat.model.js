/**
 * Created by VIVEK on 3/4/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ChatSchema = new Schema({
    from : String,
    to : String,
    message : String,
});

module.exports = mongoose.model('Chat', ChatSchema);
