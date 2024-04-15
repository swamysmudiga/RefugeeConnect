import instructors from "../models/instructor.js";
import { addLogIn } from './../services/login-service.js';
import bcrypt from 'bcryptjs';

export const search = async (params = {}) => {
    const instructor = await instructors.find(params).exec();
    return instructor;
}

export const get = async (id) => {
    const instructor = instructors.find({id : id}).exec();
    return instructor;
}

export const deleteInstructor = async (id) => {
    const instructor = instructors.deleteOne({id : id}).exec();
    return instructor;
}

export const updateInstructor = async (id, body) => {
    const instructor = instructors.findOneAndUpdate({id : id}, body);
    return instructor;
}

export const save = async (instructor) => {
    console.log("This is register", instructor);
    const newObject = {username: instructor.username, password: instructor.password, role: instructor.role};
    const success = await addLogIn(newObject);
    console.log(success);
    const hashedPassword = await bcrypt.hash(instructor.password, 8);
    const newInstructor = new instructors({ ...instructor, password: hashedPassword });
    await newInstructor.save();
    const { password, ...instructorDataWithoutPassword } = newInstructor.toObject();
    return instructorDataWithoutPassword;
}