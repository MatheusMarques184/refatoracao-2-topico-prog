import { productType } from './types/product.type';
import ProductModel from './product.schema'
import { readFile, writeFile } from 'fs/promises';

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

    async randomProducts() {
        const products = await this.findAll()
        const randomProduct: any = []
        while (randomProduct.length < 4) {
            const randomIndex = Math.floor(Math.random() * products.length)
            randomProduct.push(products[randomIndex])
            products.splice(randomIndex, 1)
        }
        return randomProduct
    }

    async findAndSave() {
        const products = await this.findAll();
        writeFile('products.json', JSON.stringify(products, null, 2))
        return "produtos salvo em arquivo"
    }

    async readProducts() {
        const products = await readFile('products.json', "utf-8" )
        return JSON.parse(products)
    }
}