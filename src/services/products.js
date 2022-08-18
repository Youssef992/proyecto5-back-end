const ProductService = class{
    constructor(ProductModel){
        this.Model= ProductModel;
    }

    async create(productData){
        const newProduct= new this.Model(productData);
        console.log('-----------');
        console.log(newProduct);
        console.log('-----------');
        newProduct.save();
        return newProduct.toObject();
    }
}
module.exports=ProductService;