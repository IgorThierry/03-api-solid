import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'

export async function appRoute(app: FastifyInstance) {
  app.post('/users', register)
}
