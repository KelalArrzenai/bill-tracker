const router = require("express").Router();
const billsController = require("../../controllers/billController");

router
    .route("/")
    .post(billsController.create);

router
    .route("/:id")
    .get(billsController.findByUserId)
    .put(billsController.update)
    .delete(billsController.remove);

module.exports = router;