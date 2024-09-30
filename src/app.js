import express from 'express'
import cors from 'cors'
import { FRONTEND_URI } from './config.js'
import morgan from 'morgan'
import routes from './routes/index.js'

const app = express()

app.use(cors({
  origin: FRONTEND_URI,
  credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use('/api', routes)

export default app
