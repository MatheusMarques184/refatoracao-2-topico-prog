import { productType } from './types/product.type';
import ProductModel from './product.schema'

export class productService {
    
    constructor(){}

    async create(product: productType) {
        return await ProductModel.create(product)
    }

    async findAll() {
        return await ProductModel.find()
    }

    async find(id) {
        return await ProductModel.findById(id)
    }

    async update(id, data: productType){
        return await ProductModel.findByIdAndUpdate(id, {
            "name": data.name,
            "price": data.price,
            "quantity": data.quantity
        }, {new: true})
    }

    async delete(id) {
        await ProductModel.findByIdAndDelete(id)
        return "produto deletado"
    }
}