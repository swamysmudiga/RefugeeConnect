// Camp:
//       type: object
//       properties:
//         donationid:
//           type: integer
//           format: int64
//           examples:
//             - 20
//         personid:
//           type: integer
//           format: int64
//           examples:
//             - 40
//         donationAmount:
//           type: number  
//           format: double   
//           examples:
//             - 2000.0

import mongoose from "mongoose";

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
        type : Number,
        required : true
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


const camp_model = mongoose.model('camp',camp);

export default camp_model;
