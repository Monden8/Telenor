const lengthChecker = (username, password, email) =>
  new Promise((resolve, reject) => {
    if (username.length < 1 || password.length < 1 || email.length < 1) {
      reject(new Error('Please fill in all fields!'));
    } else {
      resolve();
    }
  });

module.exports = { lengthChecker };
