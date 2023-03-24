import mongoose from 'mongoose'

const castSchema = new mongoose.Schema({
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
    MobileNumber:{
        type:Number,
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
    CastType: {
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
    },
    HouseNo: {
        type: String,
        required: true
    },
    Pincode:{
        type: String,
        required: true
    },
    AadherNumber:{
        type: String,
        required: true
    },
    Sscmemo: {
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

const model = mongoose.model('Castcertificates', castSchema)

export default model