const mongoose = require('mongoose');
const { Schema } = mongoose;

const childSchema = new Schema({
   product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
   },
});

const wishlistSchema = new Schema({
   userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
   },
   wishlistItems: [childSchema],
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = { Wishlist };
