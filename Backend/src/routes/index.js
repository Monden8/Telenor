const express = require('express');
const { userRegister } = require('../controllers/register-controller');

const router = express.Router();

router.post('/register', userRegister);

module.exports = router;
