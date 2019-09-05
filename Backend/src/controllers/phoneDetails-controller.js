const { getPhone } = require('../services/getPhone-service');

const phoneDetails = (req, res) => {  
  getPhone(req.params.id)
    .then((data) => { res.status(200).json(data); })
    .catch((err) => {
      if (err.errors) {
        res.status(400).json({ status: 'error', message: err.message });
      }
    });
};

module.exports = { phoneDetails };
