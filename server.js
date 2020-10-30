const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const User = require('./models/user');
const passport = require("./config/passport");
const bodyParser = require('body-parser');
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize()); 
app.use(passport.session());

// Sessions to track login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://cr31293:thispasswordsucks@cluster0.ftj0e.mongodb.net/billtracker?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true });

// start API server
app.listen(PORT, function() {
    console.log(`API server now listening on port ${PORT}`);
});
