const User = require('../models/register.model');

const saveToken = data => new Promise((resolve, reject) => {
  const response = data;
  User.findOneAndUpdate(
    { username: data.datas.username },
    { refreshToken: data.rt },
    (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    },
  );
});

module.exports = { saveToken };
