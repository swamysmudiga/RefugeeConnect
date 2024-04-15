
import { addDonations, getDonationById, getAllDonations } from "../services/donation-service.js";

import { setError, setResponse } from "./handle-response.js";


//Add Donations controller
export const addDonationsController = async(request,response)=>{
//  console.log("from addDonations!!");
    try{
        const body = {...request.body};
        const responseData = await addDonations(body);
        setResponse(responseData,response); 
    }catch(error){
        setError(error,response);
    }
}

//Find Donations controller using IDs
export const findDonationsController = async(request,response)=>{
    const newObject = request.params.id;
    // console.log("find by id- ",request.params.id);
    // console.log("newObject- ",newObject);
    try{
        const responseData = await getDonationById(newObject);
        setResponse(responseData,response); 
    }catch(error){
        setError(error,response);
    }
}

//get all Donations Controller
export const getAllDonationsController = async(request,response)=>{
    // console.log("from getAllDonations!!");
    try{
        const responseData = await getAllDonations();
        setResponse(responseData,response); 
    }catch(error){
        setError(error,response);
    }
}
