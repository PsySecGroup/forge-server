// https://github.com/fastify/middie
import Middie from '@fastify/middie'

export default async function load (fastify) {
  await fastify.register(Middie)
}
