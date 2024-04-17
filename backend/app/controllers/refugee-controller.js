import * as refugeeService from './../services/refugee-service.js';
import { setResponse, setError } from './handle-response.js';
import * as loginService from './../services/login-service.js';

export const getAllRefugee = async (request, response) => {
    try{
        const params = {...request.query};
        const refugee = await refugeeService.getAllRefugee(params);
        setResponse(refugee, response);
    }catch(error){
        setError(error, response);
    }
}

export const refugeeRegister = async (request , response) => {
    try {

        console.log("request body is - ",request.body);
        
        const success = await loginService.findByUserName(request.body.username);
        
        if(success){
            return response.status(402).json({ message: 'User already created.'});
        }
        const refugee = { ...request.body };
        console.log(" Refugee is from register - ", refugee);
        const refugees = await refugeeService.save(refugee);
        setResponse(refugees, response);
    } catch(error) {
        setError(error, response);
    }
}


export const getOneRefugee = async (request, response) => {
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


