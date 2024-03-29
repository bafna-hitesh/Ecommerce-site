const mongoose = require('mongoose');
const { Schema } = mongoose;

const childSchema = new Schema({
   product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
   },
   quantity: {
      type: Number,
   },
});

const cartSchema = new Schema({
   userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
   },
   cartItems: [childSchema],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = { Cart };
