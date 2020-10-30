const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes)

const bodyParser = require('body-parser');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);

// connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://cr31293:thispasswordsucks@cluster0.ftj0e.mongodb.net/billtracker?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true });

// start API server
app.listen(PORT, function() {
    console.log(`API server now listening on port ${PORT}`);
});
