import mongoose from "mongoose";
import counter from './counterId.js';

const userStorySchema = new mongoose.Schema({
    storyId: {
        type: String,
        index:{
            unique : true
        }
    },
    refugeeId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

userStorySchema.pre('save', async function(next) {
    if (this.isNew) {  
        const count = await counter.findByIdAndUpdate(
            { _id: 'UserStory' },  
            { $inc: { seq: 1 } },  
            { new: true, upsert: true }  
        );
        this.storyId = `sto_${count.seq}`; 
    }
    next();  
});

const UserStory = mongoose.model('UserStory', userStorySchema);

export default UserStory;
