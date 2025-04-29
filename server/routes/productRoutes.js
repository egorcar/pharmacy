const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// GET /api/products
router.get('/', async (req, res) => {
    console.log('GET /api/products triggered');
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
