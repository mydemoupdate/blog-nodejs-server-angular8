var Category = require('../models/category.model');

exports.list_all_category = function(req, res) {
  console.log("Goooo get all");
  Category.getAllCategory(function(err, categories) {

    if (err){
     return res.send(err);
    }
    return res.status(201).send({
        type: true,
        items: categories
      })
  });
};

exports.getById = function(req, res) {
  Category.getById(req.body.id, function(err, category) {
    if (err){
     return res.send(err, 'Error lỗi');
    }
    return res.status(201).send({
        type: true,
        item: category
      })
  });
};

exports.save = function(req, res){
  var category = new Category(req.body);
  if(!category.category_name){
    return res.status(400).send({type: false, message: 'Provide name '});
  }
  Category.save( category,function(err, categories){
    if (err){
      return res.send(err);
     }
     return res.status(201).send({
         type: true,
         items: categories
       })
  });
};

exports.delete = function(req, res){
   Category.delete( req.body.id, function(err, categories){
    if (err){
      return res.send(err, 'Error lỗi');
     }
     return res.status(201).send({
         type: true,
         items: categories
       })
   });
 }


exports.data_category= function(req, res) {
    
    const todo = {
        title: req.body.title,
        title2: req.params.title
      }
    return res.status(201).send({
        success: 'true',
        message: 'todo added successfully',
        todo
      })
};