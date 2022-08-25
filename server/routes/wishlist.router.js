const express = require('express');
const {
   getWishlistById,
   getProductById,
} = require('../controllers/params.controller');
const {
   getWishlistItems,
   addWishlistItem,
   deleteWishlistItem,
} = require('../controllers/wishlist.controller');


const router = express.Router();

router.param('productId', getProductById);

router.get('/wishlist', getWishlistById, getWishlistItems);
router.post(
   '/wishlist/:productId',
   getWishlistById,
   addWishlistItem,
);
router.delete(
   '/wishlist/:productId',
   getWishlistById,
   deleteWishlistItem,
);

module.exports = router;
