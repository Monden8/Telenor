const { checkFormFields } = require('../services/loginfields_checker');
const { searchUsernameAndPassword } = require('../services/search_un_and_pw');
const { addToken } = require('../services/addToken-service');
const { saveToken } = require('../services/saveToken-service');

const userLogin = (req, res) => {
  const { username, password } = req.body;

  checkFormFields(username, password)
    .then(() => searchUsernameAndPassword(username, password))
    .then(data => addToken(data))
    .then(data => saveToken(data))
    .then((resData) => {
      res.status(200).json({ rt: resData.rt, t: resData.t, data: resData.datas });
    })
    .catch((err) => { res.status(400).json(err.message); });
};

module.exports = { userLogin };
