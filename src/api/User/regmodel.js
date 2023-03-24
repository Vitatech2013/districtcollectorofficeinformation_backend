import mongoose from 'mongoose'

const registrtionSchema = new mongoose.Schema({

   UserName: {
        type: String,
       required: true
    },
   Password: {
        type:String,
        required: true
    },
    Phoneno: {
        type: Number,
       required: true
    },
   Emailid: {
        type:String,
        required: true
    },
    Gender: {
        type:String,
        required: true
    },
    Qualification: {
        
        type: String,
       required: true
    },
    Dob: {
       
        type: String,
       required: true
    },

    District: {
        type: String,
        required: true
    },
     Mandal  :{
          type: String,
       required: true
    },
    City: {
      
        type: String,
       required: true
    }
   
}, {
    timestamps: true
});

const model = mongoose.model('Registration', registrtionSchema)


export default model