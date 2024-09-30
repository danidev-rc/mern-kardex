import mongoose from 'mongoose'
import {MONGO_URI} from '../src/config.js'

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('MongoDB connected')
  } catch (err) {
    console.error(err)
  }
}
