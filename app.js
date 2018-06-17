const Hapi = require('hapi')
const server = Hapi.server({ port: 5000, host: '0.0.0.0' })

const mainPlugin = require('./setup')
const userRoutes = require('./src/users')

const start = async () => {
  try {
    await server.register(mainPlugin)
    await server.register(userRoutes)
    await server.start()
    console.log('Server running at:', server.info.uri)
  } catch (err) {
    console.error(err)
  }
}

start()
