const express = require('express');
const { userRegister } = require('../controllers/register-controller');
const { addItemsController } = require('../controllers/addItem-Controller');

const router = express.Router();

router.post('/addItems', addItemsController);
router.post('/register', userRegister);
//router.put('/addToCart', );
//router.delete('/payCart', );
//router.delete('/removeItem', );

module.exports = router;
