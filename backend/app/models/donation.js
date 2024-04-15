import mongoose from "mongoose";

const donation = new mongoose.Schema({
    donationId:{
        type : Number,
        required : true
    },
    donationAmount : {
        type : Number,
        required : true
    },
    createdDate:{
        type: Date,
        required:true
    }
});


const donation_model = mongoose.model('donation',donation);

export default donation_model;
