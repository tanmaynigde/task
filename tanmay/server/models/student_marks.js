const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    student_name:{
        type:String,
        required:true
    },
    student_age:{
        type:Number,
        required:true
    },
    student_marks:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('student_collection',StudentSchema)