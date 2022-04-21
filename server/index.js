require('dotenv').config();

const express = require('express');
const initializeDBConnection = require('./db/db.connect')

const app = express();

initializeDBConnection();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on https://localhost:${PORT}`)
})