const router = require('express').Router();

const {
   getCartById,
   getProductById,
} = require('../controllers/params.controller');

const {
   getCartItems,
   addCartItem,
   deleteCartItem,
} = require('../controllers/cart.controller');

router.param('productId', getProductById);

router.use(getCartById);

router.route('/cart').get(getCartItems);

router
   .route('/cart/:productId')
   .post(addCartItem)
   .delete(deleteCartItem);

module.exports = router;
