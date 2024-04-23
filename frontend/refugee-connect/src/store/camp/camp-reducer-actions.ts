import axios from 'axios';
import { Dispatch } from 'redux';
import { addCamp, removeCamp, updateCamp, getAllCamps, Camp , CampState} from './camp-reducer'


export const addCampAsync = (data : Camp , image : File | undefined ) => {
    return async (dispatch : Dispatch) => {
      const resourceHandler = async (data : Camp) => {

        try{
          const formData = new FormData();
         formData.append('image', image as Blob);

         console.log("Form Data - ",formData);
         // Make a POST request to upload the image file to the server
         const uploadResponse = await axios.post('http://localhost:4000/upload', formData, {
           headers: {
             'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
           },
         });
   
         // Get the uploaded image path from the server response
         const imagePath = uploadResponse.data.imagePath;
         data.campImage = imagePath;
         const response = await axios
          .post(`http://localhost:4000/camp/`, { ...data }) //Post url for resources
          .then((res) => {
            return res.data;
          });
        }catch(error){
          console.log(error); 
          return error; 
        } 
      };
      try {
        const offeringsData = await resourceHandler(data);
        dispatch(addCamp(data));
      } catch (err) {
        console.log(err);
      }
    };
  };

  export const removeCampAsync = (campId : number) => {
    return async (dispatch : Dispatch) => {
      const resourceHandler = async (campId : number) => {
       
        const response = await axios
          .delete(`http://localhost:4000/camp/${campId}`) //Delete url for resources
          .then((res) => {
            return res.data;
          });
        return response;
      };
  
      try {
        const offeringsData = await resourceHandler(campId);
        dispatch(removeCamp({id : campId}));
      } catch (err) {
        console.log(err);
      }
    };
  };

  export const updateCampAsync = (data : Camp) => {
    return async (dispatch : Dispatch) => {
      const resourceHandler = async (data : Camp) => {
       
        console.log("camp Id is ", data.campId," And data is",data);
        const response = await axios.put(`http://localhost:4000/camp/${data.campId}`,{...data})
          .then((res) => {
            return res.data;
          });
          console.log("response from axios is- ",response);
        return response;
      };
  
      try {
        const offeringsData = await resourceHandler(data);
        console.log("Inside camp store call from axios response is - ",offeringsData);
        dispatch(updateCamp(data));
      } catch (err) {
        console.log(err);
      }
    };
  };

  export const getAllCampAsync = () => {
    return async (dispatch : Dispatch) => {
      const resourceHandler = async () => {
       
        const response = await axios
          .get(`http://localhost:4000/camp`) //get url for resources
          .then((res) => {
            return res.data;
          });
        return response;
      };
  
      try {
        const offeringsData = await resourceHandler();
        dispatch(getAllCamps(offeringsData));
      } catch (err) {
        console.log(err);
      }
    };
  };
