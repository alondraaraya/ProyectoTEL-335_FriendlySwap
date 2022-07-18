// oferta.model.js
const { Schema, model } = require('mongoose')

const ofertaSchema = new Schema({
    description: {
       type: String,
       required: true
   },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }
},{
    timestamps: true
});

ofertaSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Oferta = model("Oferta", ofertaSchema);
module.exports = Oferta;