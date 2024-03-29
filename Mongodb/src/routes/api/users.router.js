const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../../models/user.model')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
                          .populate('posts', {
                            content: 1,
                            date: 1
                          })
  response.json(users)
})

usersRouter.post('/', async (request, response) => {
  const { body } = request
  const { username, email, name, password } = body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    email,
    name,
    passwordHash
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

module.exports = usersRouter