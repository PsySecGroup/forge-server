// https://github.com/dnlup/fastify-traps
import traps from '@dnlup/fastify-traps'

export default async function load (fastify) {
  await fastify.register(traps, {
    timeout: 1000,
    onSignal(signal) {
      this.log.debug(`Received signal ${signal}`)
    },
    onClose() {
      this.log.info('Server closed')
    },
    onTimeout(timeout) {
      this.log.error(`Forcing close after ${timeout} ms`)
    },
    onError(error) {
      this.log.error(`Uh oh: ${error.message}`)
    }
  })
}
