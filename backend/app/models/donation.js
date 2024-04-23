import mongoose from "mongoose";
import counter from './counterId.js';

const donation = new mongoose.Schema({
    donationId:{
        type : String,
        index:{
            unique : true
        }
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

donation.pre('save', async function(next) {
    if (this.isNew) {  
        const count = await counter.findByIdAndUpdate(
            { _id: 'donation' },  
            { $inc: { seq: 1 } },  
            { new: true, upsert: true }  
        );
        this.donationId = `don_${count.seq}`; 
    }
    next();  
});

const donation_model = mongoose.model('donation',donation);

export default donation_model;
