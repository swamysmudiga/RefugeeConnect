import mongoose from 'mongoose';
const { Schema } = mongoose;

const refugeeSchema = new Schema({
        personid: { 
            type: Number, 
            required: true  
        },
        username: { 
            type: String, 
            required: true
        },
        role: {
            type : String,
            required : true
        },
        password: { 
            type: String, 
            required: true 
        },
        ethnicity: { 
            type: String, 
            required: false 
        },
        religion: { 
            type: String, 
            required: false 
        },
        language: { 
            type: String, 
            required: false 
        },
        health: { 
            type: String, 
            required: false 
        },
        education: { 
            type: String, 
            required: false 
        },
        occupation: { 
            type: String, 
            required: false 
        },
        family_status: { 
            type: String, 
            required: false 
        },
        has_dependents: { 
            type: Boolean, 
            required: true 
        },
        previous_location: { 
            type: String, 
            required: false 
        },
        current_location: { 
            type: String, 
            required: true 
        },
        legal_status: { 
            type: String, 
            required: true 
        },
        assistance_needed: { 
            type: String, 
            required: false 
        },
        name: { 
            type: String, 
            required: true 
        },
        age: { 
            type: Number, 
            required: true 
        },
        nationality: { 
            type: String, 
            required: true 
        },
        gender: { 
            type: String, 
            required: true 
        },
        dob: { 
            type: Date, 
            required: true 
        },
        address: { 
            type: String, 
            required: false 
        },
        phone_no: { 
            type: String, 
            required: false 
        },
        email: { 
            type: String, 
            required: true 
        },
        blood_type: { 
            type: String, 
            required: false 
        },
        height: { 
            type: Number, 
            required: false 
        },
        weight: { 
            type: Number, 
            required: false 
        }
});

const Refugee = mongoose.model('refugee', refugeeSchema);

export default Refugee;
