import mongoose from 'mongoose';
import counter from './counterId.js'; 

const refugeeSchema = new mongoose.Schema({
        personid: { 
            type: String, 
            index: { 
                unique: true 
            } 
        },
        username: { 
            type: String, 
            required: true, 
            unique: true 
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
        },
        image: {
            type: String,
            required: true
        }
});


refugeeSchema.pre('save', async function(next) {
    if (this.isNew) {  
        const count = await counter.findByIdAndUpdate(
            { _id: 'refugee' },  
            { $inc: { seq: 1 } },  
            { new: true, upsert: true }  
        );
        this.personid = `ref_${count.seq}`;  
    }
    next();  
});


const refugeeDetails = mongoose.model('RefugeeDetails', refugeeSchema);

export default refugeeDetails;
