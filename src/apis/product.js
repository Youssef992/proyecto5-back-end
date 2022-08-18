const express = require('express')
const router = express.Router()
const ProductModel = require('../models/products')
const ProductService = require('../services/products')

const productService = new ProductService(ProductModel)
const { productsController } = require('../controllers')
const { getProducts,getProductById } = productsController;
router.post('/', async (req, res) => {
    const body = req.body;
    const user = await productService.create(body)

    res.status(201).send(user);
})

router.get('/', async (req, res) => {
    const products = await getProducts()
    console.log(products);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(products)
})
router.get('/:id', async (req, res) => {
    console.log('------------------')
    console.log(req.body);
     const product = await getProductById(req.params.id)
     console.log(product);
     res.header("Access-Control-Allow-Origin", "*");
     res.send(product)
})
module.exports = router;