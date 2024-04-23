import mongoose from "mongoose";
import counter from './counterId.js'; 

const user = new mongoose.Schema({
    userId:{
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
    },
    role:{
        type: String,
        required: true
    }
});

user.pre('save', async function(next) {
    if (this.isNew) {  
        const count = await counter.findByIdAndUpdate(
            { _id: 'user' },  
            { $inc: { seq: 1 } },  
            { new: true, upsert: true }  
        );
        this.userId = `user_${count.seq}`; 
    }
    next();  
});

const user_model = mongoose.model('user', user);

export default user_model;
