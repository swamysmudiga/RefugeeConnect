import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ViwAllResourceAndNearbyCamps = () => {
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
              <Button variant="contained" style={{ marginTop: '1rem', width: 'auto' }}>
                View All Resources
              </Button>
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
                src="../src/images/NearByCamp.png"
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
              <Button variant="contained" style={{ marginTop: '1rem', width: 'auto' }}>
                View Nearby Camps
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ViwAllResourceAndNearbyCamps;
