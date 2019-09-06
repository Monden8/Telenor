const nodemailer = require('nodemailer');

function automaticmail(emailto) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hackathonfoxes@gmail.com',
      pass: 'wnyxkuqvfufyziwx',
    },
  });

  const mailOptions = {
    from: 'hackathonfoxes@gmail.com',
    to: emailto,
    subject: 'Welcome to Telenor',
    text: 'Greetings! Thank for joining us, we hope you find everything on the webshop you are looking for, and wish You a wonderful day! Kind regards, Telenor',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent to: ${info.accepted}`);
    }
  });
}

module.exports = { automaticmail };
