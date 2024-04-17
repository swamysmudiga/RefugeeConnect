import React from 'react';
import Accommodation from './Accomodation';
import FoodDistributionCenter from './FoodDistributionCenter';
import MedicalClinic from './MedicialClinic';
import ResourceSection from './Resources';
import UserStories from '../UserStories';
import { Container, Typography, Button, Grid, Card, CardContent, IconButton, CardMedia } from '@mui/material';
import ViwAllResourceAndNearbyCamps from './NewResource';




const ResourceHomePage = () => {
  return (
    <div >
      {/* <Accommodation />
      <FoodDistributionCenter />
      <FoodDistributionCenter />
      <MedicalClinic /> */}
      <ViwAllResourceAndNearbyCamps />
      {/* <Container style={{ maxHeight: '80vh', overflowY: 'scroll' }}>
        <UserStories />
      </Container> */}
      
    </div>
  );
};

export default ResourceHomePage;
