import users from './../models/user.js'
import { addLogIn } from './../services/login-service.js';

export const search = async (params = {}) => {
    const user = await users.find(params).exec();
    return user;
}

export const save = async (user) => {
    const newUser = new users(user);
   const ans =  await newUser.save();
   console.log("New user- ",ans);
    const newObject = {personid: newUser.userId ,username: newUser.username, password: newUser.password, role: newUser.role, image:newUser.image};
    const success = await addLogIn(newObject);
    console.log("stored log In is...",success);
    return ans;
}

export const get = async (id) => {
    const user = users.find({userId : id}).exec();
    return user;
}

export const deleteUser = async (id) => {
    const user = users.deleteOne({userId : id}).exec();
    return user;
}

export const updateUser = async (id, body) => {
    const user = users.findOneAndUpdate({userId : id}, body);
    return user;
}