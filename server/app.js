const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

module.exports = app;
