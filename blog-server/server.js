// server.js

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mysql = require('mysql');
    
    var sql = require('./database/db');
    console.log(sql.connect, '      :  Server conection  DB success');
    const studentsRoutes = require('./routes/student.route');
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/',studentsRoutes);
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });