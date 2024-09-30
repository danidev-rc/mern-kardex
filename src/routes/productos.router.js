import { Router } from 'express'
import {
  getProductos,
  getProducto,
  createProducto,
  deleteProducto,
  updateProducto
} from '../controllers/productos.controller.js'

const router = Router()

router.get('/productos', getProductos)
router.get('/productos/:id', getProducto)
router.post('/productos', createProducto)
router.delete('/productos/:id', deleteProducto)
router.put('/productos/:id', updateProducto)

export default router
