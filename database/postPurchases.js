const db = require('./index.js');

module.exports.postAPurchase = postAPurchase = (purchase, callback) => {
  let { product_name, product_url, vendor, purchase_date, purchase_price, user_email } = purchase;

  let sqlString = `
    INSERT INTO purchase (product_name, product_url, vendor, purchase_date, purchase_price, user_email)
    VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(sqlString, [product_name, product_url, vendor, purchase_date, purchase_price, user_email], (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(null, data);
      console.log('check data object', data);
    }
  })
};