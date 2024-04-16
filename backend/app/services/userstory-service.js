import UserStories from "../models/userstory.js";

export const search = async (params = {}) => {
    const userstory = await UserStories.find(params).exec();
    return userstory;
}

export const save = async (userstory) => {
    const newUserstory = new UserStories(userstory);
    return newUserstory.save();
}

export const get = async (id) => {
    const userstory = UserStories.find({storyId : id}).exec();
    return userstory;
}

export const deleteUserstory = async (id) => {
    const userstory = UserStories.deleteOne({storyId : id}).exec();
    return userstory;
}

export const updateUserstory = async (id, body) => {
    const userstory = UserStories.findOneAndUpdate({storyId : id}, body);
    return userstory;
}