import mongoose from "mongoose";
import counter from './counterId.js'; 

const instructor = new mongoose.Schema({
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
    },
    image: {
        type: String,
        required: true
    }
});

instructor.pre('save', async function(next) {
    if (this.isNew) {  
        const count = await counter.findByIdAndUpdate(
            { _id: 'instructor' },  
            { $inc: { seq: 1 } },  
            { new: true, upsert: true }  
        );
        this.id = `ins_${count.seq}`; 
    }
    next();  
});

const instructor_model = mongoose.model('instructor', instructor);

export default instructor_model;
