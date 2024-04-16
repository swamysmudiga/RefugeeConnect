import { setError, setResponse } from "./handle-response.js";
import * as userstoryServices from '../services/userstory-service.js';

export const search = async (request, response) => {
    try {
        const params = {...request.query};
        const userstory = await userstoryServices.search(params);
        setResponse(userstory, response);
    } catch(error) {
        setError(error, response);
    }
}

export const post = async (request, response) => {
    try {
        const userstory = {...request.body};
        const newUserstory = await userstoryServices.save(userstory);
        setResponse(newUserstory,response);
    } catch(error) {
        setError(error, response);
    }
}

export const get = async (request, response) => {
    try {
        const userstory = await userstoryServices.get(request.params.id);
        setResponse(userstory, response);
    } catch(error) {
        setError(error, response);
    }
}

export const deleteUserstory = async (request, response) => {
    try {
        const userstory = await userstoryServices.deleteUserstory(request.params.id);
        setResponse(userstory, response);
    } catch(error) {
        setError(error, response);
    }
}

export const updateUserstory = async (request, response) => {
    try {
        const userstory = await userstoryServices.updateUserstory(request.params.id, request.body);
        setResponse(userstory, response);
    } catch(error) {
        setError(error, response);
    }
}