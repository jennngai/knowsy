const db = require('./index.js');

module.exports.postAPurchase = postAPurchase = (purchase, callback) => {
  let { product_name, product_url, product_image, vendor, purchase_date, purchase_price, purchaser_email, purchaser_name } = purchase;

  let sqlString = `
    INSERT INTO purchase (product_name, product_url, product_image, vendor, purchase_date, purchase_price, purchaser_email, purchaser_name)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sqlString, [product_name, product_url, product_image, vendor, purchase_date, purchase_price, purchaser_email, purchaser_name], (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(null, data);
      console.log('check data object', data);
    }
  })
};