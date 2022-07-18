const { Schema, model } = require('mongoose')
// const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  email: String,
  name: String,
  passwordHash: String,
  post: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  oferta: [{
    type: Schema.Types.ObjectId,
    ref: 'Oferta'
  }]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    //delete returnedObject.passwordHash
  }
})

// userSchema.plugin(uniqueValidator)

const User = model('User', userSchema)

module.exports = User