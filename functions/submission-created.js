require('dotenv').config();

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  CONTACT_NUMBERS,
  BOT_NUMBER,
  BOT_MESSAGE
} = process.env;
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

exports.handler = function(event, context, callback) {
  Promise.all(
    CONTACT_NUMBERS.split(';').map(num => {
      return client.messages.create({
        from: BOT_NUMBER,
        to: num,
        body: BOT_MESSAGE
      });
    })
  )
    .then(() => callback())
    .catch(e => callback(e));
};
