// https://github.com/fastify/under-pressure
import underPressure from '@fastify/under-pressure'
import { ENABLE_PRESSURE } from '../constants'

export default async function load (fastify) {
  if (ENABLE_PRESSURE) {
    await fastify.register(underPressure, {
      maxEventLoopDelay: 1000,
      maxHeapUsedBytes: 100000000,
      maxRssBytes: 100000000,
      maxEventLoopUtilization:0.98,
      retryAfter: 50
    })
  }
}
