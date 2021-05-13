const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name : {
        type : String,
        required : [true, 'Name field is required']
    },
    roll : {
        type : String,
        required : [true, 'Roll field is required']
    },
    present : {
        type : Boolean,
        degault : true
    }
});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;