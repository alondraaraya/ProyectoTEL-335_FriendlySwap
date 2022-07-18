const express = require('express');
const ofertaRouter = express.Router();
const oferta = require('../../models/oferta.model'); 
const User = require('../../models/user.model'); // user model


ofertaRouter.get('/', async (req, res, next) => {
  const oferta = await Oferta.find({}).populate('user', {
    username: 1,
    name: 1
  })

  res.json(oferta)
});


ofertaRouter.get("/:oferta_id", async (req, res, next) => {
  const { oferta_id } = req.params
  await Oferta.findById(oferta_id)
    .populate('user', {
      username: 1,
      name: 1
    })
    .then(oferta => {
      if (oferta) return res.json(oferta)
      res.status(404).end()
    })
    .catch(err => next(err))
});



ofertaRouter.post("/", async (req, res, next) => {

  const { title, body } = req.body //recupero los datos desde el body

  const { userId } = req // sacar userId de request

  const user = await User.findById(userId) //busco el usuario

  const newOferta = new Oferta({ 
    title,
    body,
    user: user._id
  });

  try {
    const oferta = await newOfertat.save() //guardo un nuevo post
    user.oferta = user.oferta.concat(oferta._id) //agrego el post al usuario
    await user.save() //guardo el usuario

    res.status(201).json(oferta) //respondo con el post
  } catch (error) {
    res.status(401).json("Error: " + error)
  }

});

/* Edit Single Post */
ofertaRouter.patch("/:oferta_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  Oferta.findByIdAndUpdate(req.params.oferta_id, { $set: fieldsToUpdate }, { new: true }, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "oferta updated successfully"
    });
  });
});

/* Delete Single Post */
ofertaRouter.delete("/:oferta_id", (req, res, next) => {
    Oferta.findByIdAndDelete(req.params.oferta_id, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "oferta deleted successfully"
    });
  });
});

module.exports = ofertaRouter;