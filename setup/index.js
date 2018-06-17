const { register } = require('../src/users')

const setup = () => {
  const { samuraiject } = require('samurai-inject')

  const { Container } = samuraiject

  const container = Container()

  register(container)

  return container
}

const mainPlugin = {
  name: 'mainPlugin',
  register (server) {
    server.decorate('server', 'container', setup())
  }
}

module.exports = mainPlugin
