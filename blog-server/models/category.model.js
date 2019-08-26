var sql = require('../database/db');

var Category = function(category){
    this.category_name = category.category_name,
    this.id = category.id
};

Category.getAllCategory = function (result) {
  sql.query("Select * from category", function (err, res) {
          if(err) {
              result(null, err);
          }
          else{
           result(null, res);
          }
      });   
};
Category.getById = function (id, result) {
  sql.query('Select *from category  where id = '+id+' LIMIT 1', function (err, res) {
          if(err) {
              result(null, err);
          }
          else{
           result(null, res);
          }
      });   
};
Category.save = function (category, result) {
    sql_query = 'UPDATE category SET category_name='+category.category_name+' WHERE id = '+category.id+'';
    if(!category.id){
        sql_query = 'INSERT INTO category VALUES('+category.category_name+')';
    }
    sql.query(sql_query, function (err, res) {
            if(err) {
                result(null, err);
            }
            else{
                sql.query("Select *FROM category",function(err, res){
                    result(null, res);   
                });
            }
        });      
  };
Category.delete = function (id, result){
    sql.query('DELETE category WHERE id = '+id+'', function(err, res){
        if(err) {
            result(null, err);
        }
        else{
         result(null, res);
        }
    });
};  
module.exports = Category;