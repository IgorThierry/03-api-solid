import fastify from 'fastify'
import { appRoute } from './http/routes'

export const app = fastify()

app.register(appRoute)
