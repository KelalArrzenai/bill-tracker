const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .post(userController.create)
    .get(userController.find);

router
    .route("/:id")
    .delete(userController.remove);

module.exports = router;