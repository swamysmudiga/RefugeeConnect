import { Resource  } from "./resource-reducer";
import { Dispatch } from 'redux';
import { addResource, removeResource, updateResource , getAllResource} from './resource-reducer'
import axios from 'axios';


export const addResourceAsync = (data : Resource , image: File | null) => {
    return async (dispatch : Dispatch) => {
      const resourceHandler = async (data : Resource) => {

        try{ 

          const formData = new FormData();
          formData.append('image', image as Blob);

        const uploadResponse = await axios.post('http://localhost:4000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
         }});

         console.log("upload response", uploadResponse);

         const newObject ={
          contentType: data.contentType,
          name : data.name,
          createdDate : new Date(),
          userId : localStorage.getItem("personId"),
          description : data.description,
          location : data.location,
          isAvailable: data.isAvailable,
          image:uploadResponse.data.imagePath
         }
         console.log("newObject - ", newObject);

         const response = await axios
          .post(`http://localhost:4000/resource/register`, { ...newObject }) //Post url for resources
          .then((res) => {
            return res.data;
          });

          return response;
        }catch(err){
          console.log("error while adding resource!!!!!"); 
        }
        
      };
  
      try {
        const offeringsData = await resourceHandler(data);
        dispatch(addResource(offeringsData));
      } catch (err) {
        console.log(err);
      }
    };
  };

  export const removeResourceAsync = (resourceId : number) => {
    return async (dispatch : Dispatch) => {
      const resourceHandler = async (resourceId : number) => {
       
        const response = await axios
          .delete(`http://localhost:4000/resource/${resourceId}`) //Delete url for resources
          .then((res) => {
            return res.data;
          });
        return response;
      };
  
      try {
        const offeringsData = await resourceHandler(resourceId);
        dispatch(removeResource({id : resourceId}));
      } catch (err) {
        console.log(err);
      }
    };
  };

  export const updateResourceAsync = (data : Resource) => {
    return async (dispatch : Dispatch) => {
      const resourceHandler = async (data : Resource) => {
        
        console.log("Inside call");

        const response = await axios
          .put(`http://localhost:4000/resource/${data.id}`,{...data}) //update url for resources
          .then((res) => {
            return res.data;
          });
        return response;
      };
  
      try {
        const offeringsData = await resourceHandler(data);
        console.log("response from call .. ", offeringsData);

        dispatch(updateResource(data));
      } catch (err) {
        console.log(err);
      }
    };
  };

  export const getAllResourceAsync = () => {
    return async (dispatch : Dispatch) => {
      const resourceHandler = async () => {
       
        const response = await axios
          .get(`http://localhost:4000/resource/`) //get url for resources
          .then((res) => {
            return res.data;
          });
        return response;
      };
  
      try {
        const offeringsData = await resourceHandler();
        dispatch(getAllResource(offeringsData));
      } catch (err) {
        console.log(err);
      }
    };
  };
