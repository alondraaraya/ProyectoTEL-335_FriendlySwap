const express = require('express');
const postRouter = express.Router();
const Post = require('../../models/post.model'); // post model
const User = require('../../models/user.model'); // user model

/* Get all Posts */
postRouter.get('/', async (req, res, next) => {
  const post = await Post.find({}).populate('user', {
    username: 1,
    name: 1
  })

  res.json(post)
});

/* Get Single Post */
postRouter.get("/:post_id", async (req, res, next) => {
  const { post_id } = req.params
  await Post.findById(post_id)
    .populate('user', {
      username: 1,
      name: 1
    })
    .then(post => {
      if (post) return res.json(post)
      res.status(404).end()
    })
    .catch(err => next(err))
});


/* Add Single Post */
postRouter.post("/", async (req, res, next) => {

  const { title, body } = req.body //recupero los datos desde el body

  const { userId } = req // sacar userId de request

  const user = await User.findById(userId) //busco el usuario

  const newPost = new Post({ //creo un nuevo post
    title,
    body,
    user: user._id
  });

  try {
    const post = await newPost.save() //guardo un nuevo post
    user.post = user.post.concat(post._id) //agrego el post al usuario
    await user.save() //guardo el usuario

    res.status(201).json(post) //respondo con el post
  } catch (error) {
    res.status(401).json("Error: " + error)
  }

});

/* Edit Single Post */
postRouter.patch("/:post_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  Post.findByIdAndUpdate(req.params.post_id, { $set: fieldsToUpdate }, { new: true }, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "Post updated successfully"
    });
  });
});

/* Delete Single Post */
postRouter.delete("/:post_id", (req, res, next) => {
  Post.findByIdAndDelete(req.params.post_id, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "Post deleted successfully"
    });
  });
});

module.exports = postRouter;