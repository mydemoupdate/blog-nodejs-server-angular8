const express = require('express');
const studentsRoutes = express.Router();


const student_controller = require('../controllers/student.controller');
// Defined store route


// Defined get data(index or listing) route
studentsRoutes.get('/', student_controller.list_all_student);

// Defined edit route
// studentsRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Student.findById(id, function (err, students){
//       res.json(students);
//   });
// });


module.exports = studentsRoutes;