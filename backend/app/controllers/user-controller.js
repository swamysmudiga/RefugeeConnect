import * as userService from './../services/user-service.js'; 
import { setResponse, setError } from './handle-response.js';
import * as loginService from './../services/login-service.js';

export const userLogin = async (request, response) => {
    try {
        const loginDetails = request.body;
        const token = await userService.loginUser(loginDetails);
        setResponse({ token: token }, response);
    } catch (error) {
        setError(error, response);
    }
};

export const search = async (request, response) => {
    try {
        const params = {...request.query};
        const user = await userService.search(params);
        setResponse(user, response);
    } catch(error) {
        setError(error, response);
    }
}

export const userRegister = async (request, response) => {
    try {

        console.log("request body is - ",request.body);
        const success = await loginService.findByUserName(request.body.username);

        if(success){
            return response.status(402).json({ message: 'User already created.'});
        }

        const newUserDetails = request.body;
        const newUser = await userService.save(newUserDetails);
        setResponse(newUser, response);
    } catch (error) {
        setError(error, response);
    }
};

export const getUserById = async (request, response) => {
    try {
        const user = await userService.get(request.params.id);
        setResponse(user, response);
    } catch (error) {
        setError(error, response);
    }
};

export const updateUserById = async (request, response) => {
    try {
        const { id } = request.params;
        const updateData = request.body;
        const updatedUser = await userService.updateUser(id, updateData);
        setResponse(updatedUser, response);
    } catch (error) {
        setError(error, response);
    }
};

export const removeUserById = async (request, response) => {
    try {
        const removeUser = await userService.deleteUser(request.params.id);
        setResponse(removeUser, response); 
    } catch (error) {
        setError(error, response);
    }
};

