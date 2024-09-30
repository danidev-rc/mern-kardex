import Productos from '../models/productos.model.js'

// metodo para obtener todos los productos
export const getProductos = async (req, res) => {
  try {
    const productos = await Productos.find()
    res.json(productos)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// metodo para obtener un producto por id
export const getProducto = async (req, res) => {
  try {
    const producto = await Productos.findById(req.params.id)
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' })
    res.json(producto)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

// metodo para crear un producto
export const createProducto = async (req, res) => {
  const { nombre, precioCompra, precioVenta, cantidadStock, fechaRegistro } = req.body
  try {
    const producto = new Productos({ nombre, precioCompra, precioVenta, cantidadStock, fechaRegistro })
    await producto.save()
    res.json(producto)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// metodo para eliminar un producto
export const deleteProducto = async (req, res) => {
  try {
    const deleteProducto = await Productos.findByIdAndDelete(req.params.id)
    if (!deleteProducto) return res.status(404).json({ message: 'Producto no encontrado' })
    return res.sendStatus(204)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

// metodo para actualizar un producto
export const updateProducto = async (req, res) => {
  try {
    const producto = await Productos.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' })
    res.json(producto)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
