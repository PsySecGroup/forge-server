// https://github.com/fastify/fastify-secure-session
import session from '@fastify/session'
import {
  SESSION_SECRET
} from '../constants'

export default async function load (fastify) {
  // https://github.com/fastify/fastify-secure-session
  await fastify.register(session, {
    secret: SESSION_SECRET
  })
}
