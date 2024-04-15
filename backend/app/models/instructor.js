import mongoose from "mongoose";

const instructor = new mongoose.Schema({
    id:{
        type : Number,
        required : true
    },
    name: {
        type : String,
        required : true
    },
    username: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    role: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    phone_no: { 
        type: String, 
        required: false 
    }
});

const instructor_model = mongoose.model('instructor', instructor);

export default instructor_model;