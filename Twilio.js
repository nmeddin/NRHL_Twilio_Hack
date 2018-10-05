// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// https://stackabuse.com/reading-and-writing-json-files-with-node-js/

'use strict';

const fs = require('fs')

let rawdata = fs.readFileSync('/home/nmeddin/Node/config.json');
let twiliodata = JSON.parse(rawdata);
console.log(twiliodata)

const accountSid = twiliodata.accountId;
const authToken = twiliodata.authToken;
const fromNum = twiliodata.fromNum;
const toNum = twiliodata.toNum;

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Your package has been delivered.',
     from: fromNum,
     to: toNum
   })
  .then(message => console.log(message.sid))
  .done();

