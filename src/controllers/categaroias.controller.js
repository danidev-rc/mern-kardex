import Categoria from '../models/categorias.model.js'

// metodo para obtener todas las categorias
export const getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find()
    res.json(categorias)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

// metodo para obtener una categoria por id
export const getCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findById(req.params.id)
    if (!categoria) return res.status(404).json({ message: 'Categoria no encontrada' })
    res.json(categoria)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

// metodo para crear una categoria
export const createCategoria = async (req, res) => {
  const { nombre } = req.body
  try {
    const categoria = new Categoria({ nombre })
    await categoria.save()
    res.json(categoria)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

// metodo para eliminar una categoria
export const deleteCategoria = async (req, res) => {
  try {
    const deleteCategoria = await Categoria.findByIdAndDelete(req.params.id)
    if (!deleteCategoria) return res.status(404).json({ message: 'Categoria no encontrada' })
    return res.sendStatus(204)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

// metodo para actualizar una categoria
export const updateCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!categoria) return res.status(404).json({ message: 'Categoria no encontrada' })
    res.json(categoria)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

