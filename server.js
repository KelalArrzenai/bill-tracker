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

// connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/billtracker");

// start API server
app.listen(PORT, function() {
    console.log(`API server now listening on port ${PORT}`);
});
