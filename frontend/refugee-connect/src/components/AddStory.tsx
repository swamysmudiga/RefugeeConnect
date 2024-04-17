import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';

const AddStoryForm = () => {
  const [storyData, setStoryData] = useState({
    storyId: '',
    refugeeId: '',
    title: '',
    description: '',
    image: '',
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setStoryData({ ...storyData, [name]: value });
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    // Handle submission of storyData
    console.log(storyData);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Add Story
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Story ID"
              name="storyId"
              value={storyData.storyId}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Refugee ID"
              name="refugeeId"
              value={storyData.refugeeId}
              onChange={handleChange}
            />
          </Grid>
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
            <TextField
              fullWidth
              label="Image Path"
              name="image"
              value={storyData.image}
              onChange={handleChange}
            />
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
