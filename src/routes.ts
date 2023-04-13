import { Router } from 'express'
import productController from './products/product.controller'
import userController from './user/user.controller'

const routes = Router()

routes.post('/users', userController.create)

routes.post('/products', productController.create)
routes.get('/products', productController.findAll)
routes.get('/products/:id', productController.find)
routes.put('/products/:id', productController.update)
routes.delete('/products/:id', productController.delete)

export default routes