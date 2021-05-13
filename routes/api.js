const express = require('express');
const Student = require('../models/student');
const router = express.Router();

router.get('/students', (req,res, next) => {
    Student.find({}).then((students) => {
        res.send(students);
    }).catch(next);
});

router.post('/students', (req, res, next) => {
    Student.create(req.body).then((student) => {
        res.send(student);
    }).catch(next);
});

router.put('/students/:id', (req, res, next) => {
   Student.findOneAndUpdate({_id: req.params.id}, req.body).then((student) => {
       Student.findOne({_id: req.params.id}).then((student) => {
           res.send(student)
       });
   }); 
});

router.delete('/students/:id', (req, res, next) => {
    Student.findOneAndDelete({_id: req.params.id}).then((student) => {
        res.send(student);
    })
});

module.exports = router;