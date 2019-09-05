const express = require('express');
const { userRegister } = require('../controllers/register-controller');
const { userLogin } = require('../controllers/login-controller');
const { userLogout } = require('../controllers/logout-controller');
const { getItems } = require('../controllers/getitems-controller');
const { getCart } = require('../controllers/getcart-controller');
const { phoneDetails } = require('../controllers/phoneDetails-controller');


const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.post('/logout', userLogout);
router.get('/main', getItems);
router.get('/cart', getCart);
router.get('/main/:id', phoneDetails);


//router.put('/addToCart', );
//router.delete('/payCart', );
//router.delete('/removeItem', );

module.exports = router;
