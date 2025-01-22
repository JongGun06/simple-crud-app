let express = require('express')
let Product = require('../models/product.model.js')
let router = express.Router()
let {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js')

router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/', createProduct)

router.put('/:id',updateProduct)

router.delete('/:id',deleteProduct)



module.exports = router