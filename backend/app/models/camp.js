import mongoose from "mongoose";
import counter from './counterId.js';

//Schema for entire Camp
const camp = new mongoose.Schema({
    campId:{
        type : String,
        index:{
            unique : true
        }
    },
    campName:{
        type : String,
        required : true
    },
    campCapacity:{
        type : Number,
        required : true
    },
    campLocation:{
        type : String,
        required : true
    },
    campCurrentOccupancy:{
        type : Number,
        required : true
    },
    campImage: {
        type: String,
        required: true
    },
    campManagementName:{
        type : String,
        required : true
    },
    supportingOrganizations:{
        type: String,
        required: true
    },
    Infrastructure:{
        type : String,
        required : true
    },
    personId:{
        type : String,
        required : true
    }
});

camp.pre('save', async function(next) {
    if (this.isNew) {  
        const count = await counter.findByIdAndUpdate(
            { _id: 'camp' },  
            { $inc: { seq: 1 } },  
            { new: true, upsert: true }  
        );
        this.campId = `cam_${count.seq}`; 
    }
    next();  
});

const camp_model = mongoose.model('camp',camp);

export default camp_model;
