import mongoose from "mongoose";
import counter from './counterId.js';


//Schema for Camp Facilities 
const campFacilities = new mongoose.Schema({
    campFacilityID:{
        type : Number,
        required : true
    },
    campFacilityName : {
        type : String,
        required : true
    }
});

//Schema for Camp Services 
const campServices = new mongoose.Schema({
    campServiceID:{
        type : Number,
        required : true
    },
    campServiceName : {
        type : String,
        required : true
    }
});

//Schema for SupportingOrganizations 
const supportingOrganizations = new mongoose.Schema({
    supportingOrganizationID:{
        type : Number,
        required : true
    },
    SupportingOrganizationName : {
        type : String,
        required : true
    }
});

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
    campFacilities:[campFacilities],
    campServices:[campServices],
    campManagementName:{
        type : String,
        required : true
    },
    campSecurityLevel:{
        type : String,
        required : true
    },
    SupportingOrganizations:[supportingOrganizations],
    Infrastructure:{
        type : String,
        required : true
    },
    personId:{
        type : Number,
        required : true
    },
    donationId:{
        type : Number,
        required : true
    },
    donationAmount : {
        type : Number,
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
