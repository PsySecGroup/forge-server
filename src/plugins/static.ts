// https://github.com/fastify/fastify-static
import { STATIC_PATH } from '../constants'
import Static from '@fastify/static'

export default async function load (fastify) {
  // return reply.download('myHtml.html', 'custom-filename.html')
  // reply.download('myHtml.html', { cacheControl: false }) // serving a file disabling cache-control headers
  await fastify.register(Static, {
    root: STATIC_PATH,
    prefix: '/assets/'
  })
}
