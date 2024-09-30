import { Router } from 'express'
import {
  getCategorias,
  getCategoria,
  createCategoria,
  deleteCategoria,
  updateCategoria
} from '../controllers/categaroias.controller.js'

const router = Router()

router.get('/categorias', getCategorias)
router.get('/categorias/:id', getCategoria)
router.post('/categorias', createCategoria)
router.delete('/categorias/:id', deleteCategoria)
router.put('/categorias/:id', updateCategoria)

export default router
