const express = require('express');
const { userRegister } = require('../controllers/register-controller');
const { userLogin } = require('../controllers/login-controller');

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);


//router.put('/addToCart', );
//router.delete('/payCart', );
//router.delete('/removeItem', );

module.exports = router;
