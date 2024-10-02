import mongoose from 'mongoose'

const productosSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  precioCompra: {
    type: Number,
    required: true
  },
  precioVenta: {
    type: Number,
    required: true
  },
  cantidadStock: {
    type: Number,
    required: true
  },
  fechaRegistro: {
    type: Date,
    default: Date.now
  },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categorias'
  }
}, {
  timestamps: true
})

export default mongoose.model('productos', productosSchema)
