import axios from 'axios';
import { Dispatch } from 'redux';
import { addCamp, removeCamp, updateCamp, getAllCamps, Camp , CampState} from './camp-reducer'


export const addCampAsync = (data : Camp) => {
    return async (dispatch : Dispatch) => {
      const resourceHandler = async (data : Camp) => {
       
        const response = await axios
          .post(``, { ...data }) //Post url for resources
          .then((res) => {
            return res.data;
          });
        return response;
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
          .delete(`${campId}`) //Delete url for resources
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
       
        const response = await axios
          .put(``,{...data}) //update url for resources
          .then((res) => {
            return res.data;
          });
        return response;
      };
  
      try {
        const offeringsData = await resourceHandler(data);
        dispatch(updateCamp(data));
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
        dispatch(getAllCamps(offeringsData));
      } catch (err) {
        console.log(err);
      }
    };
  };
