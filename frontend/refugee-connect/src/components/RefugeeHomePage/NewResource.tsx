import React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography, Button, Grid, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Facebook, Twitter, LinkedIn, YouTube } from '@mui/icons-material';

const ViwAllResourceAndNearbyCamps = () => {
const useNavigation = useNavigate();

const handleResourceClick = (resource: string) => {
  // Navigate to the respective page based on the clicked resource
  switch (resource) {
    case 'ViewAllResource':
      useNavigation('/refugee/viewAllResource');
      break;
    case 'ViewNearByCamps':
      useNavigation('/refugee/viewNearByCamps');
      break;
    default:
      break;
  }
};
  return (
    <>
      {/* First Container */}
      <Container maxWidth="xl" style={{ padding: '2rem 0' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <img
                className="w-full h-auto rounded-lg object-cover"
                src="../src/images/ResourcePhoto.png"
                alt="resource"
                style={{ maxWidth: '100%', height: 'auto', width: '400px' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4" component="div" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                Resources
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '1rem', marginRight:'4rem' }}>
                <span>
                  "View All Resource simplifies access to crucial amenities like
                </span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'cursive', color: 'red' }}> accommodation, food distribution centers, and medical clinics.</span>
                <span> Our user-friendly platform ensures swift access to vital services, facilitating support for those in need."</span>
              </Typography>
              <Button variant="contained" style={{ marginTop: '1rem', width: 'auto' }} color="primary" onClick={() => handleResourceClick('ViewAllResource')}>
                View All Resources
              </Button>
              {/* <Button variant="contained" color="primary" onClick={() => handleResourceClick('Accommodation')}>
                            Go to Accommodation
              </Button> */}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Second Container with Reversed Content */}
      <Container maxWidth="xl" style={{ padding: '2rem 0' }}>
        <Grid container spacing={4} alignItems="center" direction="row-reverse">
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <img
                className="w-full h-auto rounded-lg object-cover"
                src="../src/images/NearByCamps.png"
                alt="camp"
                style={{ maxWidth: '100%', height: 'auto', width: '500px' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4" component="div" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                Nearby Camps
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '1rem', marginLeft:'4rem' }}>
                <span>
                  Easily find nearby camps through our platform. Click
                </span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'cursive', color: 'red' }}> 'View Nearby Camps'</span>
                <span> for detailed information on locations and amenities.</span>
              </Typography>
              <Button variant="contained" style={{ marginTop: '1rem', width: 'auto' }} color="primary" onClick={() => handleResourceClick('ViewNearByCamps')}>
                View Nearby Camps
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <footer style={{ backgroundColor: '#000', color: '#fff', padding: '40px 0', width: '100%' }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} justifyContent="space-between" alignItems="center">
            
            {/* Support our work section */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Support our work
              </Typography>
              <Typography variant="body2" gutterBottom>
                Please help refugees in need.
              </Typography>
              <Button variant="outlined" color="inherit">
                Donate now
              </Button>
            </Grid>
            
            {/* Global Voices for Refugee section */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Global Voices for Refugee
              </Typography>
              <IconButton color="inherit"><Facebook /></IconButton>
              <IconButton color="inherit"><Twitter /></IconButton>
              <IconButton color="inherit"><LinkedIn/></IconButton>
              <IconButton color="inherit"><YouTube/></IconButton>
            </Grid>
            
            {/* Stay informed section */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Stay informed
              </Typography>
              <Typography variant="body2" gutterBottom>
                Sign up to our  to learn more about people forced to flee and how you can support them.
              </Typography>
              <Button variant="outlined" color="inherit">
                Subscribe
              </Button>
            </Grid>
            
          </Grid>
          <Typography variant="caption" align="center" display="block" gutterBottom style={{ marginTop: '20px', borderTop: '1px solid #fff', paddingTop: '20px' }}>
            Privacy policy | Terms and conditions of use | Copyright
            <br />
            © RefugeeConnect 2024
          </Typography>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <img src="../src/images/logo.png" alt="Your Logo" style={{ height: '50px', width: 'auto' }} />
          </div>
        </Container>
      </footer> 
      
    </>
  );
};

export default ViwAllResourceAndNearbyCamps;
