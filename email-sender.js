require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
  
const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.PASSWORD,
  subject: "Mail using NODEJS subject",
  text: 'Body of NodeJS text'
};

transporter.sendMail(mailOptions, function(err, info) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(`Email sent ${info.response}`);
  }
})