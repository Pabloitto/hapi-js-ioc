module.exports = ({
  userService
}) => {
  return {
    method: 'GET',
    path: '/api/v1/users',
    config: {
      handler () {
        return userService.fetchUsers()
      }
    }
  }
}
