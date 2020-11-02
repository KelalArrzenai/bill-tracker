
const db = require("../models/");

module.exports = {
  findByUserId: function(req, res) {
<<<<<<< HEAD
    db.Bill
      .findAll({ userId: req.params.id })
=======
   Bill
      .find({ userId: req.params.id })
>>>>>>> 1bf940a4ceb8cf162e23f3c5fa4411e11244a4ea
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {

      console.log('reqbody',req.body);
    db.Bill

      .create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    Bill
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    Bill
      .findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};