/**
 * Created by user on 12/18/16.
 */
/**
 * Created by user on 10/22/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Account = new Schema({
    username: String,
    password: String,
    mentor: Boolean,
    student: Boolean,
    phone: String
});


module.exports = mongoose.model('Account', Account);