const { getAllItems } = require('../services/getAllItems-service');

const getItems = (req, res) => {
  getAllItems()
    .then((data) => { res.status(200).json(data); })
    .catch((err) => {
      if (err.errors) {
        res.status(400).json({ status: 'error', message: err.message });
      }
    });
};

module.exports = { getItems };
