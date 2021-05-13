const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost:27017/crudapp');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(express.json());

app.use('/api', require('./routes/api'));

app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
});

app.listen(3000);