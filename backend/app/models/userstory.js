import mongoose from "mongoose";

const userStorySchema = new mongoose.Schema({
    storyId: {
        type: Number,
        required: true,
        unique: true
    },
    refugeeId: {
        type: Number,
        required: true,
        unique: true
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

const UserStory = mongoose.model('UserStory', userStorySchema);

export default UserStory;
