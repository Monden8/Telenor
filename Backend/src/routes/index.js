const express = require('express');
const { userRegister } = require('../controllers/register-controller');
const { userLogin } = require('../controllers/login-controller');
const { addToCartController } = require('../controllers/addToCart-Controller');

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.put('/addToCart', addToCartController);
//router.delete('/payCart', );
//router.delete('/removeItem', );

module.exports = router;
