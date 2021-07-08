const models = require ('../database/getPurchases.js');

module.exports = {
  getAllPurchases: (req, res) => {
    models.getPurchases((err, purchases) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(201).send(purchases)
      }
    })
  }
};