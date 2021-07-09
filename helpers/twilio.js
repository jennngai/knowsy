const axios = require('axios');
const qs = require('qs');
const config = require('../config.js');

let sendMessageToUser = (message, thingToCallAfterMessageIsSent) => {

  let data = qs.stringify({
    'From': `${config.FROM}`,
    'To': `${config.TO}`,
    'Body': `${message}`
  });

  let configTwilio = {
    method: 'post',
    url: `https://api.twilio.com/2010-04-01/Accounts/${config.USERNAME}/Messages.json`,
    headers: {
      'Authorization': 'Basic ' + Buffer.from(`${config.USERNAME}:${config.TOKEN}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };

  axios(configTwilio)
  .then((response) => {
    thingToCallAfterMessageIsSent(JSON.stringify(response.data));
  })
  .catch((error) => {
    thingToCallAfterMessageIsSent(error);
  });

};

module.exports.sendMessageToUser = sendMessageToUser;