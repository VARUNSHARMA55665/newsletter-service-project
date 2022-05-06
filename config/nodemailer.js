var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testsharma55665@gmail.com',
    pass: 'test88022@'
  }
});

// module.export = transporter;
module.exports = {
  transporter: transporter
}