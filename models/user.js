// importing modules 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose'); 

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// plugin for passport-local-mongoose 
userSchema.plugin(passportLocalMongoose);

// export userschema 
const User = mongoose.model('User', userSchema);

const usersArrSchema = new Schema({
  users: [userSchema]
});

const UserStore = mongoose.model('UserStore', usersArrSchema);


module.exports = User, UserStore;