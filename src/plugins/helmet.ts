// https://github.com/fastify/fastify-helmet
import helmet from '@fastify/helmet'

export default async function load (fastify) {
  await fastify.register(helmet)
}
