import mongoose from 'mongoose'

const categoriasSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  productos: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'productos'
  }
}, {
  timestamps: true
})

export default mongoose.model('categorias', categoriasSchema)
