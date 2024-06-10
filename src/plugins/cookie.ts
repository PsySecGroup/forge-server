// https://github.com/fastify/fastify-cookie
import cookie from '@fastify/cookie'
import {
  COOKIE_SECRET
} from '../constants'

export default async function load (fastify) {
  await fastify.register(cookie, {
    secret: COOKIE_SECRET, // for cookies signature
    hook: 'onRequest',
    parseOptions: {}
  })
}
