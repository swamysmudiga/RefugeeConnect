import { UserStory } from './story-reducer';
import { Dispatch } from 'redux';
import { addUserStory, removeUserStory, updateUserStory , setAllUserStories }  from './story-reducer'
import axios from 'axios';


interface UserStoryPost {
  refugeeId: String | null;
  title: string;
  description: string;
  image: string;
}


export const addStoryAsync = (data: UserStoryPost, imageFile: File | null) => {
  return async (dispatch: Dispatch) => {
    const formData = new FormData();
    formData.append('image', imageFile as Blob);// Append the image file to the FormData object

    try {

      console.log("Form Data - ",formData);
      // Make a POST request to upload the image file to the server
      const uploadResponse = await axios.post('http://localhost:4000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
        },
      });

      // Get the uploaded image path from the server response
      const imagePath = uploadResponse.data.imagePath;
    
      // Update the data object with the image path
      console.log("from story", data);
      const updatedData: UserStoryPost = { ...data, image: imagePath };
      console.log("uploadData Story object  ",updatedData);
      // Make a POST request to add the story with the updated data
      const response = await axios.post('http://localhost:4000/userstory/register', updatedData);

      console.log("Add Story response - ", response);
      // Dispatch the addUserStory action with the original data
      dispatch(addUserStory(response.data));
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
