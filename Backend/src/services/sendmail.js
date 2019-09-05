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
    subject: 'Welcome',
    text: 'This is the most amazing webshop that has ever been made in the history of the universe.',
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
