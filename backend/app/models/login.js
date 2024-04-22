import mongoose from "mongoose";


const login = new mongoose.Schema({
    personid :{
        type : String,
        required: true
    },
    username:{
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role: {
        type : String,
        required : true
    },
    image: {
        type : String,
        required : true
    }
});


const login_model = mongoose.model('login',login);

export default login_model;