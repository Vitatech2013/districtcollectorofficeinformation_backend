import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    studentname:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    emailid: {
        type: String,
        required: true,
      
    },
    mobile: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    collegename:{
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    passyear: {
        type: Number,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    extraskills: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const model = mongoose.model('addstudents', studentSchema)



export default model