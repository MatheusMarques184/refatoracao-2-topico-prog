import {Request, Response} from 'express'
import { productService } from './product.service'

class productController {

    async create(req: Request, res: Response) {
        const createdProduct = await new productService().create(req.body)

        return res.status(200).json(createdProduct)
    }
}

export default new productController()