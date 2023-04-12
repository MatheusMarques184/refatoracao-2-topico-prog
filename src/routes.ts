import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import productController from './products/product.controller'
import userController from './user/user.controller'

const routes = Router()

routes.get('/health-check', healthCheckController.check)
routes.post('/users', userController.create)
routes.post('/products', productController.create)

export default routes