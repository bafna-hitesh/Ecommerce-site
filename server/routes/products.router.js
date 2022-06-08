const router = require('express').Router();
const { getProducts } = require('../controllers/products.controller');

router.route('/products').get(getProducts);

module.exports = router;
