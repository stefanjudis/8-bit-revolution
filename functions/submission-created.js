require('dotenv').config();

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  CONTACT_NUMBERS,
  BOT_NUMBER,
  BOT_MESSAGE
} = process.env;
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Max-Age': '2592000',
  'Access-Control-Allow-Credentials': 'true'
};

exports.handler = function(event, context, callback) {
  // if (event.httpMethod === 'OPTIONS') {
  //   console.log('options hitting!');
  //   callback(null, { statusCode: '204', headers });
  //   return;
  // }

  Promise.all(
    CONTACT_NUMBERS.split(';').map(num => {
      return client.messages.create({
        from: BOT_NUMBER,
        to: num,
        body: BOT_MESSAGE
      });
    })
  )
    .then(() => callback(null, { statusCode: 200, headers, body: 'Created' }))
    .catch(e => callback(e));
};
