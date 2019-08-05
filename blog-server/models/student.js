var sql = require('../database/db');

//Task object constructor
var Student = function(student){
    this.name = student.name;
    this.created_at = new Date();
};

Student.getAllStuent = function (result) {
  sql.query("Select * from stuent", function (err, res) {

          if(err) {
              console.log("error: ", err);
              result(null, err);
          }
          else{
            console.log('stuent : ', res);  

           result(null, res);
          }
      });   
};

module.exports = Student;