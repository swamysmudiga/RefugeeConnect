import mongoose from "mongoose";

const resource = new mongoose.Schema({
    id:{
        type : String,
        index:{
            unique : true
        }
    },
    name: {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    },
    location: {
        type : String,
        required : true
    },
    isAvailable: {
        type : Boolean,
        default: true,
        required : true
    }
});

resource.pre('save', async function(next) {
    if (this.isNew) {  
        const count = await counter.findByIdAndUpdate(
            { _id: 'resource' },  
            { $inc: { seq: 1 } },  
            { new: true, upsert: true }  
        );
        this.id = `res_${count.seq}`; 
    }
    next();  
});

const resource_model = mongoose.model('resource',resource);

export default resource_model;
