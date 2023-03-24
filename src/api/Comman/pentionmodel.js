import mongoose from 'mongoose'

const pentionSchema = new mongoose.Schema({
    ApplicationNo:{
        type: String,
        required: true
    },
    UserName:{
        type: String,
        required: true
    },
    Emailid:{
        type: String,
        
    },
    MobileNumber: {
        type: Number,
        required: true
    },
    Sonofdaughter: {
        type: String,
        required: true
    },
    SonOfDaughterName: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Children: {
        type: Number,
        required: true
    },
    District: {
        type: String,
        required: true
    },
     Mandal: {
          type: String,
       required: true
    },
    City: {
      
        type: String,
       required: true
    },
    HouseNo: {
        type: String,
        required: true
    },
    Pincode: {
        type: String,
        required: true
    },
    AadherNumber:{
        type: String,
        required: true
    },
    Aadharcard: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
   
}, {
    timestamps: true
});

const model = mongoose.model('Pentioncertificate', pentionSchema)

export default model