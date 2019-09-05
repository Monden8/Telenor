const jwt = require('jsonwebtoken');

const key = process.env.key;

const addToken = (datas) => {
  const refreshToken = jwt.sign(
    { id: datas._id, username: datas.username },
    key,
    { expiresIn: '30d' },
  );
  const token = jwt.sign({ id: datas._id, username: datas.username }, key, {
    expiresIn: '1hr',
  });
  const resData = { rt: refreshToken, t: token, datas };
  return resData;
};

module.exports = { addToken };
