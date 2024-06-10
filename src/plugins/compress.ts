// https://github.com/fastify/fastify-compress
import compress from '@fastify/compress'

export default async function load (fastify) {
  await fastify.register(compress, {
    threshold: 2048
  })
}
