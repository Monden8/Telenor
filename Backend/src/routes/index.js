const express = require('express');
const { userRegister } = require('../controllers/register-controller');
const { userLogin } = require('../controllers/login-controller');
const { userLogout } = require('../controllers/logout-controller');
const { getItems } = require('../controllers/getitems-controller');
const { getCart } = require('../controllers/getcart-controller');


const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.post('/logout', userLogout);
router.get('/main', getItems);
router.get('/cart', getCart);


module.exports = router;
