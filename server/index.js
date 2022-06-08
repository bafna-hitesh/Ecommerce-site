require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { initializeDBConnection } = require('./db/db.connect')
const { PopulateProducts } = require('./models/product.model')

const authRouter = require('./routes/auth.router')
const usersRouter = require('./routes/user.router');
const productRouter = require('./routes/products.router');
const wishlistRouter = require('./routes/wishlist.router');
const cartRouter = require('./routes/cart.router');

const app = express();

app.use(bodyParser.json());
app.use(cors());

initializeDBConnection();
// PopulateProducts();

app.get('/', (req, res) => {
    res.json({ success: true, message: 'ecommerce - API' });
});

app.use('/api', productRouter);
app.use('/api', authRouter);

app.use('/api', usersRouter);
app.use('/api', cartRouter);
app.use('/api', wishlistRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on https://localhost:${PORT}`)
})