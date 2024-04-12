import React from 'react';
import { Container, Typography, Link, IconButton, TextField, Button, Grid } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const ContentSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div>
      <section style={{ backgroundColor: '#808080', padding: '40px 0' }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            About
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our project aims to revolutionize the way people interact with technology by providing innovative solutions that enhance user experiences. Through cutting-edge technologies and a focus on user-centric design, we strive to create products that are intuitive, efficient, and impactful. With a dedicated team of experts, we're committed to pushing the boundaries of what's possible and delivering solutions that make a difference in people's lives.
          </Typography>
        </Container>
      </section>

      <section style={{ backgroundColor: '#808080', padding: '40px 0', marginTop: '40px' }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Another Section
          </Typography>
          <Slider {...sliderSettings}>
            <div>
              <img src="image1.jpg" alt="Image 1" />
              <div>
                <Typography variant="h5">Story 1</Typography>
                <Typography variant="body1">
                  Short description of the story 1. <a href="#">Read More</a>
                </Typography>
              </div>
            </div>
            <div>
              <img src="image2.jpg" alt="Image 2" />
              <div>
                <Typography variant="h5">Story 2</Typography>
                <Typography variant="body1">
                  Short description of the story 2. <a href="#">Read More</a>
                </Typography>
              </div>
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </Container>
      </section>

      <section style={{ backgroundColor: '#808080', padding: '40px 0', marginTop: '40px' }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Another Section
          </Typography>
          <Slider {...sliderSettings}>
            <div>
              <img src="image1.jpg" alt="Image 1" />
              <div>
                <Typography variant="h5">Story 1</Typography>
                <Typography variant="body1">
                  Short description of the story 1. <a href="#">Read More</a>
                </Typography>
              </div>
            </div>
            <div>
              <img src="image2.jpg" alt="Image 2" />
              <div>
                <Typography variant="h5">Story 2</Typography>
                <Typography variant="body1">
                  Short description of the story 2. <a href="#">Read More</a>
                </Typography>
              </div>
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </Container>
      </section>

      {/* Footer Section */}
      <footer style={{ backgroundColor: '#808080', color: '#fff', padding: '40px 0', marginTop: '40px' }}>
        <Container maxWidth="md">
          <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            {/* Logo */}
            <Grid item>
              <img src="logo.png" alt="Logo" style={{ height: '50px' }} />
            </Grid>
            {/* Footer Links */}
            <Grid item>
              <Typography variant="body1">
                <Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/sitemap">Sitemap</Link>
              </Typography>
            </Grid>
            {/* Social Media Icons */}
            <Grid item>
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
              <IconButton color="inherit">
                <Twitter />
              </IconButton>
              <IconButton color="inherit">
                <LinkedIn />
              </IconButton>
            </Grid>
          </Grid>
          {/* Contact Information */}
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            Contact us: example@example.com | Phone: 123-456-7890
          </Typography>
          {/* Email Sign-up Form */}
          <form style={{ marginTop: '20px' }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={8}>
                <TextField fullWidth label="Enter your email" variant="outlined" />
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" color="primary" fullWidth>
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
          {/* Copyright Notice */}
          <Typography variant="body2" style={{ marginTop: '20px' }}>
            © 2024 Your Company. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default ContentSection;
