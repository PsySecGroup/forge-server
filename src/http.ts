import Fastify from 'fastify'
import { setRoutes } from './routes'

import loadMultipart from './plugins/multipart'
import loadCompress from './plugins/compress'
import loadCookie from './plugins/cookie'
import loadMiddleware from './plugins/middleware'
import loadSession from './plugins/session'
import loadCsrf from './plugins/csrf'
import loadCors from './plugins/cors'
import loadStatic from './plugins/static'
import loadHelment from './plugins/helmet'
import loadFormbody from './plugins/formbody'
import loadJwt from './plugins/jwt'
import loadRateLimit from './plugins/rateLimit'
import loadUnderPressure from './plugins/underPressure'
import loadTraps from './plugins/traps'

import {
  USE_HTTP2,
  CONNECTION_TIMEOUT,
  KEEP_ALIVE_TIMEOUT,
  HTTP2_SESSION_TIMEOUT,
  IGNORE_TRAILING_SLASH,
  IGNORE_DUPLICATE_SLASHES,
  LOGGER,
  MAX_PARAM_LENGTH,
  BODY_LIMIT,
  REQUEST_ID_HEADER,
  PLUGIN_TIMEOUT,
  PORT,
  HOST
} from './constants'

/**
 *
 */
async function build () {
  const fastify = Fastify({
    http2: USE_HTTP2,
    connectionTimeout: CONNECTION_TIMEOUT,
    keepAliveTimeout: KEEP_ALIVE_TIMEOUT,
    http2SessionTimeout: HTTP2_SESSION_TIMEOUT,
    ignoreTrailingSlash: IGNORE_TRAILING_SLASH,
    ignoreDuplicateSlashes: IGNORE_DUPLICATE_SLASHES,
    logger: LOGGER,
    maxParamLength: MAX_PARAM_LENGTH,
    bodyLimit: BODY_LIMIT,
    requestIdHeader: REQUEST_ID_HEADER,
    pluginTimeout: PLUGIN_TIMEOUT
  })

  await loadMultipart(fastify)
  await loadCompress(fastify)
  await loadCookie(fastify)
  await loadMiddleware(fastify)
  await loadSession(fastify)
  await loadCsrf(fastify)
  await loadCors(fastify)
  await loadStatic(fastify)
  await loadHelment(fastify)
  await loadFormbody(fastify)
  await loadJwt(fastify)
  await loadRateLimit(fastify)
  await loadUnderPressure(fastify)
  await loadTraps(fastify)

  return fastify
}

export async function startHttp (routeSetter = setRoutes, port: number = PORT, host: string = HOST) {
  const fastify = await build()
  routeSetter(fastify)

  await fastify.listen({ port, host }, (err, address) => {
    if (err) {
      throw err
    }

    console.info(`HTTP listening on ${address}`)
  })

  return fastify
}
