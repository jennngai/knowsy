const models = require ('../database/postPurchases.js');
const twilio = require ('../helpers/twilio.js');

module.exports = {
  postAPurchase: (req, res) => {
    console.log('req.body', req.body);
    models.postAPurchase(req.body, (err, purchase) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(purchase);
        const { product_name, purchaser_name, vendor } = req.body;
        let messageBody = `${purchaser_name} just bought the ${product_name} from ${vendor}!`;
        twilio.sendMessageToUser(messageBody, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        })
      }
    })
  }
};