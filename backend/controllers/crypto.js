const Crypto = require("../models").Crypto;
const User = require("../models").User;

module.exports = {
  list(req, res) {
    return Crypto.findAll({
      include: [
        {
          model: User,
          as: "users"
        }
      ]
    })
      .then(cryptos => res.status(200).send(cryptos))
      .catch(error => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    return Crypto.findById(req.params.id, {
      include: [
        {
          model: User,
          as: "users"
        }
      ]
    })
      .then(role => {
        if (!crypto) {
          return res.status(404).send({
            message: "Role Not Found"
          });
        }
        return res.status(200).send(crypto);
      })
      .catch(error => res.status(400).send(error));
  },

  add(req, res) {
    return Role.create({
      crypto_name: req.body.crypto_name,
      ticker: req.body.ticker
    })
      .then(crypto => res.status(201).send(crypto))
      .catch(error => res.status(400).send(error));
  },

  addUser(req, res) {
    return Crypto.findById(req.body.crypto_id, {
      include: [
        {
          model: User,
          as: "users"
        }
      ]
    })
      .then(crypto => {
        if (!crypto) {
          return res.status(404).send({
            message: "Role Not Found"
          });
        }
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Crypto.findById(req.params.id, {
      include: [
        {
          model: User,
          as: "users"
        }
      ]
    })
      .then(crypto => {
        if (!crypto) {
          return res.status(404).send({
            message: "crypto Not Found"
          });
        }
        return crypto
          .update({
            crypto_name: req.body.crypto_name,
            ticker: req.body.ticker
          })
          .then(() => res.status(200).send(crypto))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
    return Crypto.findById(req.params.id)
      .then(crypto => {
        if (!crypto) {
          return res.status(400).send({
            message: "Crypto Not Found"
          });
        }
        return crypto
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
