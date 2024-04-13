import mongoose from "mongoose";


const login = new mongoose.Schema({
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
    }
});


const login_model = mongoose.model('login',login);

export default login_model;