const router = require("express").Router();

router.route("/")
    .get(billsController.findByUserId)
    .post(billsController.create);

router
    .route("/:id")
    .get(billsController.findByUserId)
    .put(billsController.update)
    .delete(billsController.remove);

module.exports = router;