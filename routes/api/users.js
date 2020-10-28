const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .post(userController.create);

router
    .route("/:id")
    .delete(userController.remove);

module.exports = router;