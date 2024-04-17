import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ViwAllResourceAndNearbyCamps = () => {
  return (
    <>
      {/* First Container */}
      <Container maxWidth="xl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0 }}>
        <div style={{ width: '40%', padding: '0 2rem' }}>
          <img
            className="w-full h-auto rounded-lg object-cover"
            src="../src/images/Example2.jpeg"
            alt="Honeymoon destination"
            width={400}
          />
        </div>
        <div style={{ width: '30%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <Typography variant="h5" component="div" style={{ textAlign: 'center', marginBottom: '1rem' }}>
              Resources
            </Typography>
            <Typography variant="body1">
              Our Romantic Tropical Destinations
            </Typography>
            <Typography variant="body2" style={{ marginTop: '1rem' }}>
              Et labore harum non nobis ipsum eum molestias mollitia et
              corporis praesentium a laudantium internos. Non quis eius quo
              eligendi corrupti et fugiat nulla qui soluta recusandae in
              maxime quasi aut ducimus illum aut optio quibusdam!
            </Typography>
            <Button variant="contained" style={{ marginTop: '1rem', width: '100%' }}>
              View All Resources
            </Button>
          </div>
        </div>
      </Container>
      <br />
      {/* Second Container with Reversed Content */}
      <Container maxWidth="xl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0 }}>
        <div style={{ width: '40%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <Typography variant="h5" component="div" style={{ textAlign: 'center', marginBottom: '1rem' }}>
              Nearby Camps
            </Typography>
            <Typography variant="body1">
              Our Romantic Tropical Destinations
            </Typography>
            <Typography variant="body2" style={{ marginTop: '1rem' }}>
              Et labore harum non nobis ipsum eum molestias mollitia et
              corporis praesentium a laudantium internos. Non quis eius quo
              eligendi corrupti et fugiat nulla qui soluta recusandae in
              maxime quasi aut ducimus illum aut optio quibusdam!
            </Typography>
            <Button variant="contained" style={{ marginTop: '1rem', width: '100%' }}>
              View Packages
            </Button>
          </div>
        </div>
        <div style={{ width: '50%', padding: '0 2rem' }}>
          <img
            className="w-full h-auto rounded-lg object-cover"
            src="../src/images/Example2.jpeg"
            alt="Honeymoon destination"
            width={400}
          />
        </div>
      </Container>
    </>
  );
};

export default ViwAllResourceAndNearbyCamps;
