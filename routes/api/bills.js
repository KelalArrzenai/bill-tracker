const router = require("express").Router();
const billsController = require("../../controllers/billController");

<<<<<<< HEAD
router
    .route("/")
=======
router.route("/")
>>>>>>> 1bf940a4ceb8cf162e23f3c5fa4411e11244a4ea
    .post(billsController.create);

router
    .route("/:id")
    .get(billsController.findByUserId)
    .put(billsController.update)
    .delete(billsController.remove);

module.exports = router;