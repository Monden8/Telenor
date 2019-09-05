const { lengthChecker } = require('../services/length_checker-service');
const { postUser } = require('../services/new_user-service');
const { addToken } = require('../services/addToken-service');
const { saveToken } = require('../services/saveToken-service');
const { automaticmail } = require('../services/sendmail');

const userRegister = (req, res) => {
  const { username, password, email } = req.body;

  lengthChecker(username, password, email)
    .then(() => postUser(username, password, email))
    .then(data => addToken(data))
    .then(data => saveToken(data))
    .then((response) => {
      automaticmail(email);
      res.status(200).json(response);
    })
    .catch((err) => {
      if (err.errors) {
        res
          .status(409)
          .json({ status: 'error', message: err.errors.username.message });
      } else {
        res.status(400).json({ status: 'error', message: err.message });
      }
    });
};

module.exports = { userRegister };
