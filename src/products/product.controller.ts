import {Request, Response} from 'express'
import { productService } from './product.service'

class productController {

    async create(req: Request, res: Response) {
        const createdProduct = await new productService().create(req.body)
        return res.status(200).json(createdProduct)
    }
    
    async findAll(req: Request, res: Response) {
        const products = await new productService().findAll()
        return res.status(200).json(products)
    }

    async find(req: Request, res: Response) {
        const product = await new productService().find(req.params.id)
        return res.status(200).json(product)
    }

    async update(req: Request, res: Response) {
        const updatedProduct = await new productService().update(req.params.id, req.body)
        return res.status(200).json(updatedProduct)
    }

    async delete(req: Request, res: Response) {
        const deletedProduct = await new productService().delete(req.params.id)
        return res.status(200).json(deletedProduct)
    }

    async randomProducts(req: Request, res: Response) {
        const randomProducts = await new productService().randomProducts()
        return res.status(200).json(randomProducts)
    }

    async findAndSave(req: Request, res: Response) {
        const saveProducts = await new productService().findAndSave()
        return res.status(200).json(saveProducts)
    }

    async readProducts(req: Request, res: Response) {
        const products = await new productService().readProducts()
        return res.status(200).json(products)
    }

}

export default new productController()