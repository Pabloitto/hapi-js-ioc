const setup = () => {
  const { samuraiject } = require('samuraiject')

  const { Container } = samuraiject

  const container = Container()

  const { UserService } = require('../src/users/user.service')
  const UserModel = require('../src/users/user.model')

  container.register('userService', UserService, [
    { userModel: UserModel }
  ])

  container.register('userFetchRoute', require('../src/users/user.fetch.route'), ['userService'])
  container.register('userCreateRoute', require('../src/users/user.create.route'), ['userService'])

  return container
}

const mainPlugin = {
  name: 'mainPlugin',
  register (server) {
    server.decorate('server', 'container', setup())
  }
}

module.exports = mainPlugin
