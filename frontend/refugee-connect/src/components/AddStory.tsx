import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { addStoryAsync } from '../store/story/story-reducer-actions';
import { useNavigate } from 'react-router-dom';
import {  useSelector , useDispatch } from 'react-redux';

const AddStoryForm = () => {
  const [storyData, setStoryData] = useState({
    refugeeId: '',
    title: '',
    description: '',
    image: null as File | null, 
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setStoryData({ ...storyData, [name]: value });
  };

  const handleImageChange = (e : any) => {
    const imageFile = e.target.files[0]; // Get the selected image file
    setStoryData({ ...storyData, image: imageFile }); // Update the image property in storyData
  };

  const handleSubmit = async(e : any) => {
    e.preventDefault();
    // Handle submission of storyData
    console.log(storyData);
    const writeStory = {
      title  : storyData.title,
      description : storyData.description,
      image : '',
      refugeeId : localStorage.getItem("personId")
    }
    console.log("Story Object - ", writeStory);
    const response  = await dispatch(addStoryAsync(writeStory , storyData.image));

    navigate('/refugee/refugeeHomePage');

  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Add Story
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={storyData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              name="description"
              value={storyData.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="contained-button-file"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span">
                Upload Image
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddStoryForm;
