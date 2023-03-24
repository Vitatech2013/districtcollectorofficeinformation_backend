import mongoose from 'mongoose'

const birthSchema = new mongoose.Schema({
    
    UserName:{
        type: String,
      
    },
    Emailid:{
        type: String,
        
    },
    MobileNumber:{
        type: String,
        
    },
    Sonofdaughter: {
        type: String,
       
    },
    SonOfDaughterName: {
        type: String,
       
    },
    Dob: {
        type: String,
        
    },
    PlaceDob: {
        type: String,
      
    },
    District: {
        type: String,
       
    },
     Mandal  :{
          type: String,
      
    },
    City: {
      
        type: String,
       
    },
    HouseNo: {
        type: String,
       
    },
    Pincode:{
        type: String,
        
    },
    AadherNumber:{
        type: String,
      
    },
    Rationcard: {
        type: String,
        
    },
    status: {
        type: String,
        
    }
   
}, {
    timestamps: true
});

const model = mongoose.model('Birthcertificate', birthSchema)

export default model