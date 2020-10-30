// importing modules 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose'); 

const userSchema = new Schema({
  users: [{
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true }
  }]
});

// plugin for passport-local-mongoose 
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);


module.exports = User;