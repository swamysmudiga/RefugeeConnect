import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid, Box, CardMedia, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, YouTube } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ViewAllResourceAndNearbyCamps = () => {
  const navigate = useNavigate();
  const [resourceInView, setResourceInView] = useState(false);
  const [campsInView, setCampsInView] = useState(false);

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

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'black', color: 'white', py: 4, mt: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} justifyContent="space-between" alignItems="center">
            {/* Support our work section */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Support our work
              </Typography>
              <Typography variant="body2" paragraph>
                Please help refugees in need.
              </Typography>
              <Button variant="outlined" color="inherit" onClick={() => handleResourceClick('donate')}>
                Donate now
              </Button>
            </Grid>

            {/* Global Voices for Refugee section */}
            <Grid item xs={12} sm={6} md={3}>
              <IconButton color="inherit"><Facebook /></IconButton>
              <IconButton color="inherit"><Twitter /></IconButton>
              <IconButton color="inherit"><LinkedIn /></IconButton>
              <IconButton color="inherit"><YouTube /></IconButton>
            </Grid>

            {/* Stay informed section */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Stay informed
              </Typography>
              <Typography variant="body2" paragraph>
                Sign up to our newsletter to learn more about people forced to flee and how you can support them.
              </Typography>
              <Button variant="outlined" color="inherit" onClick={() => handleResourceClick('subscribe')}>
                Subscribe
              </Button>
            </Grid>
          </Grid>
          <Typography variant="caption" align="center" display="block" gutterBottom sx={{ mt: 2, borderTop: '1px solid #fff', pt: 2 }}>
            Privacy policy | Terms and conditions of use | Copyright
            <br />
            © RefugeeConnect 2024
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <img src="../src/images/logo.png" alt="RefugeeConnect Logo" style={{ height: '50px', width: 'auto' }} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ViewAllResourceAndNearbyCamps;
