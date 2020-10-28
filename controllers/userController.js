const db = require("../models");

module.exports = {
  create: function(req, res) {
    console.log('CREATE', req.body);
    db.User
      .create(res.body)
      .then(data => {console.log(data); res.json(data)})
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