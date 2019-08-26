var Posts = require('../models/post.model');

exports.list = function(req, res) {
    Posts.list(function(err,posts) {
    if (err){
     return res.status(400).send({type:false, message: err});
    }
    return res.status(201).send({
        type: true,
        items: posts
      })
  });
};

exports.getById = function(req, res) {
    Posts.getById(req.body.id, function(err, post) {
    if (err){
        return res.status(400).send({type:false, message: err});
    }
    return res.status(201).send({
        type: true,
        item: post
      })
  });
};

exports.save = function(req, res){
  var post = new Posts(req.body);
  if(!post.name_posts){
    return res.status(400).send({type: false, message: 'Provide name '});
  }
  Posts.save(post,function(err, posts){
    if (err){
        return res.status(400).send({type: false, message: 'Save Failure '});
     }
     return res.status(201).send({
         type: true,
         items: posts
       })
  });
};

exports.delete = function(req, res){
    Posts.delete( req.body.id, function(err, posts){
    if (err){
        return res.status(400).send({type: false, message: 'DELETE Failure '});
     }
     return res.status(201).send({
         type: true,
         items: posts
       })
   });
 }
