import Fastify from 'fastify'
import { OUTGOING_MIME } from './constants'

export function setRoutes (fastify: ReturnType<Fastify>) {
  fastify.get('/', async (request, reply) => {
    reply.type(OUTGOING_MIME).code(200)
    return { hello: 'world' }
  })
}
