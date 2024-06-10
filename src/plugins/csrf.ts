// https://github.com/fastify/csrf-protection
import csrf from '@fastify/csrf-protection'

export default async function load (fastify) {
  await fastify.register(csrf, {
    sessionPlugin: '@fastify/session',
    cookieOpts: {
      signed: true
    }
  })
}
