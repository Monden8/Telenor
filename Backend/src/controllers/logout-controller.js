const { findUserByToken } = require('../services/findUserbyToken-service');
const { eraseRefreshToken } = require('../services/eraseRefreshToken');

const userLogout = (req, res) => {
  const rt = req.headers["authorization"].slice(7);

  findUserByToken(rt)
    .then(result => eraseRefreshToken(result))
    .then(() => {
      res.status(200).json({ message: 'ok' });
    })
    .catch((err) => { res.status(400).json(err.message); });
};

module.exports = { userLogout };
