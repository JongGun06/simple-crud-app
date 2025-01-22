let Product = require('../models/product.model.js')




let getProducts = async (req,res) => {
        try {
            let products = await Product.find({})   
            res.status(200).json(products)     
         } catch (error) {
            res.status(500).json({message: error.message})
         }
}

let getProduct = async (req, res) => {
    try {
        let {id} = req.params
        let product = await Product.findById(id)   
        res.status(200).json(product)     
     } catch (error) {
        res.status(500).json({message: error.message})
     }
}

let createProduct = async (req,res) => {
    try {
        let product = await Product.create(req.body)
        res.status(200).json(product)
        
    } catch (error) {
       res.status(500).json({message: error.message})
    }
}

let deleteProduct = async (req,res) => {
    try {
        let {id} = req.params
        let product = await Product.findByIdAndDelete(id)
        if(!product) {
         return res.status(404).json({message: "product not found"})
        }   
        res.status(200).json({message: "product deleted"})
     } catch (error) {
        res.status(500).json({message: error.message})
     }
}

let updateProduct = async (req,res) => {
    try {
        let {id} = req.params
        let product = await Product.findByIdAndUpdate(id, req.body)
        if(!product) {
         return res.status(404).json({message: "product not found"})
        }   
        let udpateProduct = await Product.findById(id)
        res.status(udpateProduct)
     } catch (error) {
        res.status(500).json({message: error.message})
     }
}




module.exports = {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}