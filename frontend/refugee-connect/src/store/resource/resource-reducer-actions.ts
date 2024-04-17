import { Resource  } from "./resource-reducer";
import { Dispatch } from 'redux';
import { addResource, removeResource, updateResource , getAllResource} from './resource-reducer'
import axios from 'axios';


export const addResourceAsync = (data : Resource) => {
    return async (dispatch : Dispatch) => {
      const resourceHandler = async (data : Resource) => {
       
        const response = await axios
          .post(``, { ...data }) //Post url for resources
          .then((res) => {
            return res.data;
          });
        return response;
      };
  
      try {
        const offeringsData = await resourceHandler(data);
        dispatch(addResource(data));
      } catch (err) {
        console.log(err);
      }
    };
  };

  export const removeResourceAsync = (resourceId : number) => {
    return async (dispatch : Dispatch) => {
      const resourceHandler = async (resourceId : number) => {
       
        const response = await axios
          .delete(`${resourceId}`) //Delete url for resources
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
       
        const response = await axios
          .put(``,{...data}) //update url for resources
          .then((res) => {
            return res.data;
          });
        return response;
      };
  
      try {
        const offeringsData = await resourceHandler(data);
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
          .get(``) //get url for resources
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
