const express = require('express');
const categoryRoutes = express.Router();


const category_controller = require('../controllers/category.controller');
// Defined store route


// Defined get data(index or listing) route
 categoryRoutes.get('/all', category_controller.list_all_category);
 categoryRoutes.post('/getById', category_controller.getById);
 categoryRoutes.post('/save', category_controller.save);
 categoryRoutes.post('/delete', category_controller.delete);
 categoryRoutes.get('/post', category_controller.data_category);

// Defined edit route
// studentsRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Student.findById(id, function (err, students){
//       res.json(students);
//   });
// });


module.exports = categoryRoutes;