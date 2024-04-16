import mongoose from "mongoose";

const resource = new mongoose.Schema({
    id:{
        type : Number,
        required : true
    },
    name: {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    },
    contentType: {
        type : String,
        required : true
    },
    createdDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    userId: {
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

const resource_model = mongoose.model('resource',resource);

export default resource_model;