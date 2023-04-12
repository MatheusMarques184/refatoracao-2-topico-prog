import { productType } from './types/product.type';
import ProductModel from './product.schema'

export class productService {
    
    constructor(){}

    async create(product: productType) {
        return await ProductModel.create(product)
    }

}