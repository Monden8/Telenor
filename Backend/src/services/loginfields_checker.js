const checkFormFields = (username, password) =>
  new Promise((resolve, reject) => {
    if (username === undefined || password === undefined ||
      username === '' || password === '') {
      reject(new Error('All fields are required.'));
    } else {
      resolve();
    }
  });

module.exports = { checkFormFields };
