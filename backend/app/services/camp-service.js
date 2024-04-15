import camp_model from '../models/camp.js';

/**
 * Mongoose connect for creating new Camps
 * @param {*} camps 
 * @returns 
 */
export const addCamps = async(camps) =>{

    const camp = new camp_model(camps);
    return camp.save();
    
}

/**
 * Mongoose connect to find the camp by campId
 * @param {*} id 
 * @returns 
 */
export const getCampByCampID = async(campID) =>{

    const foundCamp = await camp_model.findOne({campId:campID});
    return foundCamp;
}

/**
 * Mongoose to get all Camp Details
 * @returns All Camp Details
 */
export const getAllCampDetails = async()=>{
    const allCamps = await camp_model.find().exec();
    return allCamps;
}

/**
 * Delete Camp by Id
 * @param {*} Id 
 * @returns 
 */
export const deleteCampById = async(Id)=>{

    console.log(Id);
    const campId = {campId : Id};
    const deleteCamp = await camp_model.deleteOne(campId);
    return deleteCamp;
}

/**
 * Update Existing Camp by ID
 * @param {*} id 
 * @param {*} camp 
 * @returns 
 */
export const updateCampById = async(id , camp) =>{

    const campId = {campId : id};
    const updateCamp = await camp_model.findOneAndUpdate(campId,{...camp});
    return updateCamp;
}
