// import twilio from 'twilio';

// const accountSid = 'AC1d9c39853d3851ebe500ce5426e85ffc'; // Your Account SID from www.twilio.com/console
// const authToken = 'eb7501957f94d5dd95e18657e28e97bc';

// eslint-disable-next-line new-cap
// require the Twilio module and create a REST client
// const client = require('twilio')(accountSid, authToken);
const accountSid = 'AC1d9c39853d3851ebe500ce5426e85ffc';
const authToken = 'eb7501957f94d5dd95e18657e28e97bc';
const client = require('twilio')(accountSid, authToken);

function sendMessage() {
  // Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

  client.messages
    .create({
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      from: '+19143304250',
      to: '+19143304250',
    })
    .then((message) => console.log(message.sid));
}

export {
  // eslint-disable-next-line import/prefer-default-export
  sendMessage,
};
