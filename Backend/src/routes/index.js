const express = require('express');
const { userRegister } = require('../controllers/register-controller');
const { userLogin } = require('../controllers/login-controller');
const { addToCartController } = require('../controllers/addToCart-Controller');
const { userLogout } = require('../controllers/logout-controller');
const { getItems } = require('../controllers/getitems-controller');
const { getCart } = require('../controllers/getcart-controller');
const { phoneDetails } = require('../controllers/phoneDetails-controller');
const { deleteFromCart } = require('../controllers/deletefromCart-controller');
const { payForCartController } = require('../controllers/payForCart-Controller');

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.put('/addtocart', addToCartController);
router.post('/logout', userLogout);
router.get('/main', getItems);
router.get('/cart', getCart);
router.get('/main/:id', phoneDetails);
router.delete('/deletefromcart', deleteFromCart);
router.delete('/payforcart', payForCartController);

module.exports = router;
