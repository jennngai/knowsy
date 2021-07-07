const models = require ('../database/postPurchases.js');

module.exports = {
  postAPurchase: (req, res) => {
    console.log('req.body', req.body)
    models.postAPurchase(req.body, (err, data) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(201).send(data)
      }
    })
  }
};