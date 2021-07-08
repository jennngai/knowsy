const db = require('./index.js');

module.exports.getPurchases = getPurchases = (callback) => {
  let sqlString = `
    SELECT *
    FROM purchase
    ORDER BY purchase_date DESC
    LIMIT 10`;

  db.query(sqlString, (err, purchases) => {
    if (err) {
      callback(err)
    } else {
      callback(null, purchases);
      console.log('check data object', purchases);
    }
  })
};