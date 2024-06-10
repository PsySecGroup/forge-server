// https://github.com/fastify/fastify-cors
import cors from '@fastify/cors'  

export default async function load (fastify) {
  await fastify.register(cors)
}
