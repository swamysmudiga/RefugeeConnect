import { UserStory } from './story-reducer';
import { Dispatch } from 'redux';
import { addUserStory, removeUserStory, updateUserStory , setAllUserStories }  from './story-reducer'
import axios from 'axios';


export const addStoryAsync = (data : UserStory) => {
    return async (dispatch : Dispatch) => {
      const resourceHandler = async (data : UserStory) => {
       
        const response = await axios
          .post(``, { ...data }) //Post url for resources
          .then((res) => {
            return res.data;
          });
        return response;
      };
  
      try {
        const offeringsData = await resourceHandler(data);
        dispatch(addUserStory(data));
      } catch (err) {
        console.log(err);
      }
    };
  };

  export const removeStoryAsync = (storyId : number) => {
    return async (dispatch : Dispatch) => {
      const resourceHandler = async (storyId : number) => {
       
        const response = await axios
          .delete(`http://localhost:4000/userstory/${storyId}`) //Delete url for resources
          .then((res) => {
            return res.data;
          });
        return response;
      };
  
      try {
        const offeringsData = await resourceHandler(storyId);
        dispatch(removeUserStory({id : storyId}));
      } catch (err) {
        console.log(err);
      }
    };
  };

  export const updateStoryAsync = (data : UserStory) => {
    return async (dispatch : Dispatch) => {
      const resourceHandler = async (data : UserStory) => {
       
        const response = await axios
          .put(``,{...data}) //update url for resources
          .then((res) => {
            return res.data;
          });
        return response;
      };
  
      try {
        const offeringsData = await resourceHandler(data);
        dispatch(updateUserStory(data));
      } catch (err) {
        console.log(err);
      }
    };
  };

  export const getAllStoryAsync = () => {

    return async (dispatch : Dispatch) => {
      const resourceHandler = async () => {
       
        const response = await axios
          .get(`http://localhost:4000/userstory/`) //get url for resources
          .then((res) => {
            return res.data;
          });
        return response;
      };
  
      try {

        console.log("Inside Stories call........");
        const offeringsData = await resourceHandler();
        console.log("data from url ", offeringsData);
        dispatch(setAllUserStories(offeringsData));

      } catch (err) {
        console.log(err);
      }
    };
  };
