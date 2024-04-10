import fastify from 'fastify'
import { ZodError } from 'zod'
import { appRoute } from './http/routes'
import { env } from './env'

export const app = fastify()

app.register(appRoute)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Send error to monitoring service like DataDog/NewRelic/Sentry
  }

  reply.status(500).send({ message: 'Internal server error' })
})
