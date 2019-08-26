// server.js

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mysql = require('mysql');
    
    var sql = require('./database/db');
    console.log(sql.connect, '      :  Server conection  DB success');

    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
    
    
    const port = process.env.PORT || 4000;
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
    // const studentsRoutes = require('./routes/student.route');
    const categoryRoutes = require('./routes/category.route');
    const postRoutes = require('./routes/post.route');
    // app.use('/api/',studentsRoutes);

    app.use('/api/blog/category', categoryRoutes);
    app.use('/api/blog/post', postRoutes);


    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });