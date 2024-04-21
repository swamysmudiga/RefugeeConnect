import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid, Box, CardMedia, IconButton } from '@mui/material';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const ViewAllResourceAndNearbyCamps = () => {
 
  const [resourceInView, setResourceInView] = useState(false);
  const [campsInView, setCampsInView] = useState(false);

  const navigate = useNavigate();


    const handleResourceClick = (resource: string) => {
        // Navigate to the respective page based on the clicked resource
        switch (resource) {
          case 'link-for-image1':
            navigate('/refugee/viewAllResource');
            break;
          case 'link-for-image2':
            navigate('/refugee/viewNearByCamps');
            break;
          default:
            break;
        }
      };
  

  useEffect(() => {
    const resourceSection = document.getElementById('resourceSection');
    const campsSection = document.getElementById('campsSection');

    const handleScroll = () => {
      if (resourceSection) {
        const { top } = resourceSection.getBoundingClientRect();
        if (top < window.innerHeight * 0.75) {
          setResourceInView(true);
        }
      }

      if (campsSection) {
        const { top } = campsSection.getBoundingClientRect();
        if (top < window.innerHeight * 0.75) {
          setCampsInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Top Row: Image Left, Text Right with animation */}
        <Grid container spacing={2} alignItems="center" justifyContent="center" id="resourceSection">
          <Grid item xs={12} md={6}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              height: 300,
              animation: resourceInView ? 'slideInFromLeft 1s forwards' : '',
              '@keyframes slideInFromLeft': {
                '0%': { transform: 'translateX(-100%)', opacity: 0 },
                '100%': { transform: 'translateX(0)', opacity: 1 },
              },
            }}>
              <CardMedia
                component="img"
                sx={{ width: '50%', objectFit: 'contain' }}
                image="../src/images/ResourcePhoto.png"
                alt="Descriptive Alt Text for Image 1"
              />
              <Box sx={{ width: '50%', p: 2 }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                  Resources
                </Typography>
                <Typography variant="body1" sx={{ mt: 1.5 }}>
                  View All Resource simplifies access to crucial amenities like accommodation, food distribution centers, and medical clinics. Our user-friendly platform ensures swift access to vital services, facilitating support for those in need.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1.5 }}
                  onClick={() => handleResourceClick('link-for-image1')}
                >
                  View All Resources
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Row: Text Left, Image Right with animation */}
        <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ mt: 4 }} id="campsSection">
          <Grid item xs={12} md={6}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              height: 300,
              animation: campsInView ? 'slideInFromRight 1s forwards' : '',
              '@keyframes slideInFromRight': {
                '0%': { transform: 'translateX(100%)', opacity: 0 },
                '100%': { transform: 'translateX(0)', opacity: 1 },
              },
            }}>
              <Box sx={{ width: '50%', p: 2, order: { xs: 2, md: 1 } }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                  Nearby Camps
                </Typography>
                <Typography variant="body1" sx={{ mt: 1.5 }}>
                  Easily find nearby camps through our platform. Click for detailed information on locations and amenities.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1.5 }}
                  onClick={() => handleResourceClick('link-for-image2')}
                >
                  View Nearby Camps
                </Button>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: '50%', objectFit: 'contain', order: { xs: 1, md: 2 } }}
                image="../src/images/UserHomeResource.png"
                alt="Descriptive Alt Text for Image 2"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
      {/* Footer */}
      </Box>
  );
};

export default ViewAllResourceAndNearbyCamps;
