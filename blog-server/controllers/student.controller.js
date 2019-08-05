var Stuent = require('../models/student');

exports.list_all_student = function(req, res) {
  Stuent.getAllStuent(function(err, student) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', student);
    res.send(student);
  });
};