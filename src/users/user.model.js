const users = []

module.exports = class User {
  constructor ({name, email}) {
    this.name = name
    this.email = email
  }
  static create ({name, email}) {
    const user = new User({name, email})
    users.push(user)
    return user
  }
  static fetch () {
    return users
  }
}
