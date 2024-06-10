// https://github.com/fastify/fastify-rate-limit
import rateLimit from '@fastify/rate-limit'

export default async function load (fastify) {
  await fastify.register(rateLimit, {
    max: 20,
    timeWindow: '1 minute'
  })
}
