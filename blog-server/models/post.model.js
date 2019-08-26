var sql = require('../database/db');

var Posts = function (post) {
    this.name_posts = post.name_posts,
        this.id = post.id,
        this.content = post.content,
        this.avartar = post.avartar,
        this.time_start = post.time_start,
        this.time_update = post.time_update,
        this.url = post.url,
        this.status = post.status,
        this.id_category = post.id_category
};
Posts.getAll = function (result) {
    var sql_query = "SELECT category.category_name *FROM category,posts WHERE posts.id_category=category.id";
    sql.query(sql_query, function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
}
Posts.getById = function (id, result) {
    var sql_query = "SELECT *FORM posts WHERE ID = " + id + "";
    sql.query(sql_query, function (err, res) {
        if (err) {
            return result(null, err);
        }
        result(null, res);
    });
}

Posts.save = function (posts, result) {
    var sql_query = "UPDATE posts SET name_posts=" + posts.name_posts + ",content=" + posts.content + ",avartar=" + posts.avartar + ",time_start=" + posts.time_start + ",time_update=" + posts.time_update + ",url=" + posts.status + ",id_category = "+posts.id_category+" WHERE id="+posts.id+"";
    if(!posts.id){
        sql_query="INSERT INTO posts VALUES(" + posts.name_posts + ","+ posts.content +"," + posts.avartar + ", " + posts.time_start + ",  " + posts.time_update + ", " + posts.status + ", "+posts.id_category+")";
    }
    sql.query(sql_query, function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            sql_query = "SELECT category.category_name *FROM category,posts WHERE posts.id_category=category.id";
            sql.query(sql_query, function (err, res) {
                result(null, res);
            });
        }
    });
}

Posts.delete = function(id, result){
    var sql_query = "DELETE category WHERE id = " + id +"";
    sql.query(sql_query, function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
}

module.exports = Posts;