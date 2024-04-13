import * as refugeeService from './../services/refugee-service.js';
import { setResponse, setError } from './handle-response.js';

export const getAllRefugee = async (request, response) => {
    try{
        const params = {...request.query};
        const refugee = await refugeeService.search(params);
        setResponse(refugee, response);
    }catch(error){
        setError(error, response);
    }
}

export const refugeeLogin = async (request, response) => {
    try{
        const loginDetails = request.body;
        const token = await refugeeService.login(loginDetails); 
        setResponse({ token: token }, response);
    }catch(error){
        setError(error, response);
    }
}

export const refugeeRegister = async (request, response) => {
    try{
        const newRefugeeData = request.body; 
        const newRefugee = await refugeeService.register(newRefugeeData);
        setResponse(newRefugee, response);
    }catch(error){
        setError(error, response);
    }
}

export const getOneRefugeeById = async (request, response) => {
    try{
        const getRefugeeDetails = await refugeeService.find(request.params.id);
        setResponse(getRefugeeDetails, response);
    }catch(error){
        setError(error, response);
    }
}

export const updateRefugeeById = async (request, response) =>{
    try{
        const {id} = request.params.id;
        const updateRefugee = {...request.body};
        const updateRefugeeDetails = await refugeeService.update(request.params.id, updateRefugee);
        setResponse(updateRefugeeDetails, response);
    }catch(error){
        setError(error, response);
    }
}

export const removeRefugeeById = async (request, response) => {
    try{
        const removeRefugeeDetails = await refugeeService.remove(request.params.id);
        setResponse(removeRefugeeDetails, response);
    }catch(error){
        setError(error, response);
    }
}

