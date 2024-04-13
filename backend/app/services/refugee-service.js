import refugeeDetails from './../models/refugee.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const KEY = 'supersecret';

export const getAllRefugee = async (params) => {
    const refugee = await refugeeDetails.find(params).exec();
    return refugee;
}

export const getOneRefugeeById = async (id) => {
    const refugee = await refugeeDetails.findById(id).exec();
    return refugee;
}

export const updateRefugeeById = async (id, updateRefugee) => {
    const updatedRefugeeDetails = await refugeeDetails.findOneAndUpdate({ id: id }, updateRefugee, { new: true });
    return updatedRefugeeDetails;
}

export const removeRefugeeById = async (id) => {
    await refugeeDetails.findByIdAndDelete(id);
    return { id };
}

export const refugeeLogin = async (loginData) => {
    const refugee = await refugeeDetails.findOne({ email: loginData.email }).exec();
    if (!refugee || !(await bcrypt.compare(loginData.password, refugee.password))) {
        throw new Error('Invalid login credentials'); 
    }
    const token = jwt.sign({ email: refugee.email, id: refugee._id }, KEY, { expiresIn: '1h' });
    return { token, refugeeId: refugee._id };
}

export const refugeeRegister = async (registrationData) => {
    const hashedPassword = await bcrypt.hash(registrationData.password, 8);
    const newRefugee = new refugeeDetails({ ...registrationData, password: hashedPassword });
    await newRefugee.save();
    const { password, ...refugeeDataWithoutPassword } = newRefugee.toObject();
    return refugeeDataWithoutPassword;
}
