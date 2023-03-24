import mongoose from 'mongoose'

const rationSchema = new mongoose.Schema({
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
    NoOfChildrens: {
        type: String,
        required: true
    },
    NoofAdultsinYourfamily: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
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
    },
    HouseNo: {
        type: String,
        required: true
    },
    Pincode:{
        type: String,
        required: true
    },
    Annualincome: {
        type: Number,
        required: true
    },
    AadherNumber:{
        type: String,
        required: true
    },
    Photo: {
        type: String,
        required: true
    }, 
    type: {
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

const model = mongoose.model('Rationcertificate', rationSchema)

export default model