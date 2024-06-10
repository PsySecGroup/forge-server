// https://github.com/fastify/fastify-jwt
import jwt from '@fastify/jwt'
import { JWT_SECRET } from '../constants'

export default async function load (fastify) {
  
  await fastify.register(jwt, {
    secret: JWT_SECRET
  })
}
