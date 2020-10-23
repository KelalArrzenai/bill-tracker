const router = require("express").Router();
const billsController = require("../../controllers/billController.js");

router.route("/")
    .get(billsController.findByUserId)
    .post(billsController.create);

router
    .route("/:userId")
    .get(billsController.findByUserId)
    .put(billsController.update)
    .delete(billsController.remove);

module.exports = router;