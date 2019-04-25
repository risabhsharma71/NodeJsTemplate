//const {validationResult} = require('express-validation/check');

const Post = require('../models/post');


exports.getPosts = (req, res, next) => {
  Post.find()
    .then(post => {
      res
      .status(200)
      .json({
        message: 'Fetched sucessfull',
        posts: post
      })
    })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err)
     
    })
};

exports.getPost = (req, res, next) => {
  const name = req.body.title;
  Post.find({ title: name})
  //console.log("postId--->", name)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      res
      .status(200)
      .json({
        message: 'Fetched sucessfull',
        post: post
      })
     // return post
    })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err)
     
    })
};


exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  const post = new Post({
    title: title,
    content: content,
     creator: {name: 'Rahul'},
  });
  post
  .save()
  .then(result => {
    console.log("data---->>>",result)
    res.status(201).json({
      message: 'Post created successfully!',
      post: result
    //console.log(result)
  });
})
  .catch(err => {
    console.log(err);

    
  });

}
