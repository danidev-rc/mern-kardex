import mongoose from 'mongoose'

const categoriasSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  fechaRegistro: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

export default mongoose.model('categorias', categoriasSchema)
