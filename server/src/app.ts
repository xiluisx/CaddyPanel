import express, { type Request, type Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from './router'

export const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/api', router)

app.get('/ping', (req: Request, res: Response) => {
	res.status(200).send('Pong')
})

app.use('*', (req: Request, res: Response) => {
	res.status(404)
	res.json({ ok: false, message: 'Not found :(' })
})
