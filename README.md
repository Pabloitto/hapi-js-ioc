# HAPI JS + Samurai Inject Implementation

This a simple Proof of concept to test Samurai Inject package with a real example of use.

**Samurainject** -> https://github.com/Pabloitto/samurainject


**Setup**

In the setup folder we have a plugin which is the component that initialize the container and decorates de server in order to add a property to access to it.
Also in the user index file we initialize the instances of routes and services.

```javascript
const  register  = (container) => {
  const { UserService } =  require('./user.service')
  const  UserModel  =  require('./user.model')
  container.register('userService', UserService, [
    { userModel: UserModel }
  ])
  container.register('userFetchRoute', require('./user.fetch.route'),   ['userService'])
  container.register('userCreateRoute', require('./user.create.route'),   ['userService'])
}
const  userRoutes  = {
  name: 'userRoutes',
  register (server) {
    const  userCreateRoute  =  server.container.resolve('userCreateRoute')
    const  userFetchRoute  =  server.container.resolve('userFetchRoute')
    server.route(userCreateRoute)
    server.route(userFetchRoute)
  }
}

module.exports  = {
  routes: userRoutes,
  register
}
```

```javascript
const { register } =  require('../src/users')
const  setup  = () => {
  const { Container } =  require('samurai-inject')
  const  container  =  Container()
  register(container)
  return  container
}
const  mainPlugin  = {
  name: 'mainPlugin',
  register (server) {
    server.decorate('server', 'container', setup())
  }
}
module.exports  =  mainPlugin
```

**Routes**

Doing that we have decoupled route

```javascript
module.exports  = ({
  userService
}) => {
  return {
    method: 'POST',
    path: '/api/v1/users',
    config: {
      handler (request) {
        return  userService.createUser(request.payload)
      }
    }
  }
}
```