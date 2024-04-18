import users from './../models/user.js'

export const search = async (params = {}) => {
    const user = await users.find(params).exec();
    return user;
}

export const save = async (user) => {
    const newUser = new users(user);
    return newUser.save();
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