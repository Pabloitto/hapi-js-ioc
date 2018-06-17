const register = (container) => {
  const { UserService } = require('./user.service')
  const UserModel = require('./user.model')

  container.register('userService', UserService, [
    { userModel: UserModel }
  ])

  container.register('userFetchRoute', require('./user.fetch.route'), ['userService'])
  container.register('userCreateRoute', require('./user.create.route'), ['userService'])
}

const userRoutes = {
  name: 'userRoutes',
  register (server) {
    const userCreateRoute = server.container.resolve('userCreateRoute')
    const userFetchRoute = server.container.resolve('userFetchRoute')
    server.route(userCreateRoute)
    server.route(userFetchRoute)
  }
}
module.exports = {
  routes: userRoutes,
  register
}
