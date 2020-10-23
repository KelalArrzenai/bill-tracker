const router = require("express").Router();
const billRoutes = require("./bills");
const userRoutes = require("./users");

// Bill routes
router.use("/bills", billRoutes);

// User routes
router.use("/users", userRoutes);

module.exports = router;