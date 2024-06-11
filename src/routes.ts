import Fastify from 'fastify'
import { OUTGOING_MIME } from './constants'
import { getUploadedFile } from './uploads'

export function setRoutes (fastify: ReturnType<Fastify>) {
  fastify.get('/', async (request, reply) => {
    reply.type(OUTGOING_MIME).code(200)
    return { hello: 'world' }
  })

  /**
   * Example of how to handle file uploads
   */
  fastify.post('/upload', async (request, reply) => {
    const files = await getUploadedFile(request)
    reply.type(OUTGOING_MIME).code(200)
    return files
  })
}
 