// https://github.com/fastify/fastify-formbody
import formbody from '@fastify/formbody'

export default async function load (fastify) {
  await fastify.register(formbody)
}
