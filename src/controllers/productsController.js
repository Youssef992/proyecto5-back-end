
const ProductModel= require('../models/products')
const getProducts = async()=>{
    return ProductModel.find({})
}
// const getProduct = async()=>{
//     return ProductModel.findById({})
// }
const getProductById= async(_id)=>{
    return ProductModel.findById(_id);
}
module.exports={
    getProducts,
    getProductById
}