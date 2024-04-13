import { addLogIn, findByUserName } from "../services/login-service.js";
import { setError, setResponse } from "./handle-response.js";
import { createJSONToken } from "../util/Auth.js"


export const logIn = async(request,response) =>{
    try{
        const newObject = request.body;
        const success = await addLogIn(newObject);
        setResponse(success, response);
    }catch(error){
        setError(error,response);
    }
}

export const getUserLogIn = async(request,response) =>{
    try{
        const newObject = request.params.id;
        const success = await findByUserName(newObject);
        console.log("Success response is " , success);
        const tkn = createJSONToken(success.username);

        if(success){

            response.status(201).json({ message: 'User created.', user: success, token: tkn });

        }
        
    }catch(error){
        setError(error,response);
    }
}