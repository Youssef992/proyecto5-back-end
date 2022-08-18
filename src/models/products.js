const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const ProductSchema = new Schema({
    sku: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    quantity: {
        type: Number
    },
    unitPrice: {
        type: Number,
        required: true
    },
    discount: {
        type: Number
    },
    img:{
        type:String
    }
    // img:{
    //     data:Buffer,
    //     contentType:String
    // }

}, {
    versionKey: false,
    timestamps: true
})

const ProductModel = model('products', ProductSchema)

module.exports = ProductModel;