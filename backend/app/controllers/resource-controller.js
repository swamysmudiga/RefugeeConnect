import { setError, setResponse } from "./handle-response.js";
import * as resourceServices from '../services/resource-service.js';

export const search = async (request, response) => {
    try {
        const params = {...request.query};
        const resource = await resourceServices.search(params);
        setResponse(resource, response);
    } catch(error) {
        setError(error, response);
    }
}

export const post = async (request, response) => {
    try {
        const resource = {...request.body};
        const newResource = await resourceServices.save(resource);
        setResponse(newResource,response);
    } catch(error) {
        setError(error, response);
    }
}

export const get = async (request, response) => {
    try {
        const resource = await resourceServices.get(request.params.id);
        setResponse(resource, response);
    } catch(error) {
        setError(error, response);
    }
}

export const deleteResource = async (request, response) => {
    try {
        const resource = await resourceServices.deleteResource(request.params.id);
        setResponse(resource, response);
    } catch(error) {
        setError(error, response);
    }
}

export const updateResource = async (request, response) => {
    try {
        const resource = await resourceServices.updateResource(request.params.id, request.body);
        setResponse(resource, response);
    } catch(error) {
        setError(error, response);
    }
}