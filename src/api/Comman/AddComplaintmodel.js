import mongoose from 'mongoose'

const addcomplaintSchema = new mongoose.Schema({
     
    UserName:{
        type: String,
        required: true
    },
    Subject:{
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
    
   
}, {
    timestamps: true
});

const model = mongoose.model('Addcomplaints', addcomplaintSchema)

export default model