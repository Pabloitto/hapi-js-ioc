module.exports = ({
  userService
}) => {
  return {
    method: 'POST',
    path: '/api/v1/users',
    config: {
      handler (request) {
        return userService.createUser(request.payload)
      }
    }
  }
}
