const mongoose = require('mongoose');
const { Schema } = mongoose;
const productsData = require('../data/products');

const ProductSchema = new Schema({
   id: Schema.Types.ObjectId,
   name: String,
   image: String,
   price: Number,
   brand: String,
   color: String,
   inStock: Boolean,
   fastDelivery: Boolean,
   ratings: Number,
   quantity: Number,
});

const Product = mongoose.model('Product', ProductSchema);

const PopulateProducts = async () => {
   try {
      await Product.deleteMany({});

      await Product.insertMany(productsData);
      
      console.log('savedProduct');
      
      process.exit();
   } catch (error) {
      console.log(error.message);
   }
};

module.exports = { Product, PopulateProducts };
