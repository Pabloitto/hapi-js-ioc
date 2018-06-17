const userRoutes = {
  name: 'userRoutes',
  register (server) {
    const userCreateRoute = server.container.resolve('userCreateRoute')
    const userFetchRoute = server.container.resolve('userFetchRoute')
    server.route(userCreateRoute)
    server.route(userFetchRoute)
  }
}
module.exports = userRoutes
