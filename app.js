  //***Template for NodeJs***//
//***Created BY Rahul M. Desai***//
    //***MOB- 9930831907 ***//
const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose')

const feedRoutes = require('./routes/route');

const registration = require('./routes/auth')

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
// setting up CORS //
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/route', feedRoutes);

app.use('/auth', registration);
// Connect to MongoDb //
mongoose.connect(
    'mongodb+srv://rahul_92:root@cluster0-3zopr.mongodb.net/test?retryWrites=true'
    )
    .then(result => {
        app.listen(8000);
    })
    .catch(err => console.log(err));