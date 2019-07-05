const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./db'),
    router = express.Router(),
    http = require('http');


// Define Routes
const employeeRoutes = require('./api/routes/employee');

const server = http.createServer(app);
const port = process.env.PORT || 3000;


    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    app.use(bodyParser.json());
    app.use(cors());

    //Get API Listing
    app.use('/api/employees', employeeRoutes);

    server.listen(port, function(){
        console.log('Listening on port ' + port);
       });

    app.use((req, res, next) => {
        const error = new Error('Not found');
        error.status = 404;
        next(error);
    })
    
    app.use((error, req, res, next) => {
        res.status(error.status || 500);
        res.json({
            error: {
                message: error.message
            }
        })
    })
    

module.exports = app;
