const express = require('express');
const { userRegister } = require('../controllers/register-controller');
const { userLogin } = require('../controllers/login-controller');
const { addToCartController } = require('../controllers/addToCart-Controller');
const { userLogout } = require('../controllers/logout-controller');
const { getItems } = require('../controllers/getitems-controller');
const { getCart } = require('../controllers/getcart-controller');
const { phoneDetails } = require('../controllers/phoneDetails-controller');

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.put('/addToCart', addToCartController);
router.post('/logout', userLogout);
router.get('/main', getItems);
router.get('/cart', getCart);
router.get('/main/:id', phoneDetails);

module.exports = router;