import { setError, setResponse } from "./handle-response.js";
import * as instructorServices from '../services/instructor-service.js';

export const search = async (request, response) => {
    try {
        const params = {...request.query};
        const instructor = await instructorServices.search(params);
        setResponse(instructor, response);
    } catch(error) {
        setError(error, response);
    }
}

export const get = async (request, response) => {
    try {
        const instructor = await instructorServices.get(request.params.id);
        setResponse(instructor, response);
    } catch(error) {
        setError(error, response);
    }
}

export const deleteInstructor = async (request, response) => {
    try {
        const instructor = await instructorServices.deleteInstructor(request.params.id);
        setResponse(instructor, response);
    } catch(error) {
        setError(error, response);
    }
}

export const updateInstructor = async (request, response) => {
    try {
        const instructor = await instructorServices.updateInstructor(request.params.id, request.body);
        setResponse(instructor, response);
    } catch(error) {
        setError(error, response);
    }
}

export const post = async (request, response) => {
    try {
        const instructor = {...request.body};
        const newInstructor = await instructorServices.save(instructor);
        setResponse(newInstructor,response);
    } catch(error) {
        setError(error, response);
    }
}