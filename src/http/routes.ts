import { FastifyInstance } from 'fastify'
import { authenticate } from '@/http/controllers/authenticate'
import { register } from './controllers/register'

export async function appRoute(app: FastifyInstance) {
  app.post('/users', register)

  app.post('/sessions', authenticate)
}
