const { User } = require('../models/user.model');
const { Wishlist } = require('../models/wishlist.model');
const { Cart } = require('../models/cart.model');
const { Product } = require('../models/product.model');

const getWishlistById = async (req, res, next) => {
   try {
      const userId = req.user._id;
      const wishlist = await Wishlist.findOne({_id: userId});
      if (!wishlist) {
         const userWishlist = new Wishlist({
            _id: userId,
         });
         await userWishlist.save();
         return res.json({
            response: userWishlist.wishlistItems,
         });
      }
      req.wishlist = wishlist;
      next();
   } catch (error) {
      return res
         .status(400)
         .json({ success: false, errorMessage: error.message });
   }
};

const getCartById = async (req, res, next) => {
   try {
      const userId = req.user._id;
		let cart = await Cart.findOne({ userId });
      if (!cart) {
         const userCart = new Cart({
            userId,
         });
         await userCart.save();
         return res.json({ response: userCart.cartItems });
      }
      req.cart = cart;
      next();
   } catch (error) {
      return res
         .status(500)
         .json({ success: false, errorMessage: error.message });
   }
};

const getProductById = async (req, res, next, id) => {
   try {
      const product = await Product.findById(id);
      if (!product) {
         throw Error('Unable to find the product');
      }
      req.product = product;
      next();
   } catch (error) {
      return res
         .status(400)
         .json({ success: false, errorMessage: error.message });
   }
};

module.exports = {getWishlistById, getCartById, getProductById };
