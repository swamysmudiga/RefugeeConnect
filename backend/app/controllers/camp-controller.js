import { addCamps, getCampByCampID, getAllCampDetails, deleteCampById, updateCampById} from "../services/camp-service.js";
import { setError, setResponse } from "./handle-response.js";


/**
 * Add Camp controller
 * @param {*} request 
 * @param {*} response 
 */
export const addCampController = async(request,response)=>{
//  console.log("from addNotes!!");
    try{
        const body = {...request.body};
        console.log("received body is - ",body);
        const responseData = await addCamps(body);
        setResponse(responseData,response); 
    }catch(error){
        setError(error,response);
    }
}

/**
 * Find Camp using Camp IDs
 * @param {*} request 
 * @param {*} response 
 */
export const findCampController = async(request,response)=>{
    // console.log("from find!!");
    const newObject = request.params.id;
    try{
        const responseData = await getCampByCampID(newObject);
        setResponse(responseData,response); 
    }catch(error){
        setError(error,response);
    }
}

/**
 * get all Camps Controller()
 * @param {*} request 
 * @param {*} response 
 */
export const getAllCampsController = async(request,response)=>{
    // console.log("from getAllNotes!!");
    try{
        const responseData = await getAllCampDetails();
        setResponse(responseData,response); 
    }catch(error){
        setError(error,response);
    }
}

/**
 * Delete Camp by Camp Id Controller 
 * @param {*} request 
 * @param {*} response 
 */
export const deleteCampByCampId = async(request,response)=>{
  
    try{
        // console.log("delete by id- ",request.params.meetingId);
        const responseData = await deleteCampById(request.params.campId);
        setResponse(responseData,response); 
    }catch(error){
        setError(error,response);
    }
}


/**
 * Update Camp by id and parameter Object
 * @param {*} request 
 * @param {*} response 
 */
export const updateCampController = async(request,response) => {

    try{
        
        console.log("id is ", request.params.campId," and Body is ",request.body);
        const updatedCamp = await updateCampById(request.params.campId, {...request.body });
        setResponse(updatedCamp,response);
    }catch(error){
        setError(error,response);
    }
}
