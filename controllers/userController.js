const db = require("../models");

module.exports = {
  create: function(req, res) {
    console.log(req.body);
    db.User
      .create(req.body)
      .then(data => {console.log(data); res.json(data)})
      .catch(err => {console.log(err); res.status(422).json(err)});
  },
  find: function(req, res) {
    db.User
      .findOne({email: req.body.email})
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findOne({_id: req.params.id})
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};