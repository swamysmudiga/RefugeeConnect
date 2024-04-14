import refugeeDetails from './../models/refugee.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { addLogIn } from './../services/login-service.js';


const KEY = 'supersecret';

export const getAllRefugee = async (params) => {
    const refugee = await refugeeDetails.find(params).exec();
    return refugee;
}

export const find = async (id) => {
    const refugee = await refugeeDetails.find({personid: id}).exec();
    return refugee;
}

export const update = async (id, updateRefugee) => {
    const updatedRefugeeDetails = await refugeeDetails.findOneAndUpdate({ personid: id }, updateRefugee, { new: true });
    return updatedRefugeeDetails;
}

export const remove = async (id) => {
    const removeRefugee = refugeeDetails.deleteOne({personid: id}).exec();
    return removeRefugee;
}


export const save = async (registrationData) => {
    console.log("This is register", registrationData);
    const newObject = {username: registrationData.username, password: registrationData.password, role: registrationData.role};
    const success = await addLogIn(newObject);
    console.log(success);
    const hashedPassword = await bcrypt.hash(registrationData.password, 8);
    const newRefugee = new refugeeDetails({ ...registrationData, password: hashedPassword });
    await newRefugee.save();
    const { password, ...refugeeDataWithoutPassword } = newRefugee.toObject();
    return refugeeDataWithoutPassword;
}

//Registering new refugee
export const save1 = async (refugees) => {
    const refugee = new refugeeDetails(refugees);
    return await refugee.save();
}