import Caterogira from '../routes/categorias.router.js'
import Producto from '../routes/productos.router.js'
import { Router } from 'express'

const router = Router()

router.use(Caterogira)
router.use(Producto)

export default router
