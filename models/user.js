// importing modules 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose'); 

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
// plugin for passport-local-mongoose 
userSchema.methods.validPassword = function(password) {
  return password === this.password;
}
userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const User = mongoose.model('User', userSchema);


module.exports = User;