import React from 'react';
import Accommodation from './Accomodation';
import FoodDistributionCenter from './FoodDistributionCenter';
import MedicalClinic from './MedicialClinic';
import ResourceSection from './Resources';
import UserStories from '../UserStories';
import { Container, Typography, Button, Grid, Card, CardContent, IconButton, CardMedia } from '@mui/material';
import ViwAllResourceAndNearbyCamps from './NewResource';
import HeaderSection from './Header';
import backgroundImage from '../../images/backgroundImage2.png'

const ResourceHomePage = () => {
  return (
    <div
      style={{
        height: '100vh',
        overflowY: 'auto',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <HeaderSection />
      <UserStories/>
      <ViwAllResourceAndNearbyCamps />
    </div>
  );
};

export default ResourceHomePage;
