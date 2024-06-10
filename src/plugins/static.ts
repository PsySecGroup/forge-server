// https://github.com/fastify/fastify-static
import Static from '@fastify/static'
import { join } from 'path'

export default async function load (fastify) {
  // return reply.download('myHtml.html', 'custom-filename.html')
  // reply.download('myHtml.html', { cacheControl: false }) // serving a file disabling cache-control headers
  await fastify.register(Static, {
    root: join(__dirname, '../assets'),
    prefix: '/assets/'
  })
}
