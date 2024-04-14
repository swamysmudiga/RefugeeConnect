import * as userService from './../services/user-service.js'; 
import { setResponse, setError } from './handle-response.js';

export const userLogin = async (request, response) => {
    try {
        const loginDetails = request.body;
        const token = await userService.loginUser(loginDetails);
        setResponse({ token: token }, response);
    } catch (error) {
        setError(error, response);
    }
};

export const userRegister = async (request, response) => {
    try {
        const newUserDetails = request.body;
        const newUser = await userService.registerUser(newUserDetails);
        setResponse(newUser, response);
    } catch (error) {
        setError(error, response);
    }
};

export const getUserById = async (request, response) => {
    try {
        const user = await userService.findUserById(request.params.id);
        setResponse(user, response);
    } catch (error) {
        setError(error, response);
    }
};

export const updateUserById = async (request, response) => {
    try {
        const { id } = request.params;
        const updateData = request.body;
        const updatedUser = await userService.updateUserById(id, updateData);
        setResponse(updatedUser, response);
    } catch (error) {
        setError(error, response);
    }
};

export const removeUserById = async (request, response) => {
    try {
        const removeUser = await refugeeService.remove(request.params.id);
        setResponse(removeUser, response); 
    } catch (error) {
        setError(error, response);
    }
};

