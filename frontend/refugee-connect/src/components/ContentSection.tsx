import React from 'react';
import { Container, Typography, Link, IconButton, TextField, Button, Grid } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

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

  const countries = [
    {
      name: 'Switzerland',
      continent: 'Europe',
      image: 'path/to/image1.jpg',
      description:
        'Nam exercitationem commodi et ducimus quia in dotore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.',
      price: '1,000',
      going: '25 People Going',
    },
    {
      name: 'Amazon',
      continent: 'Brazil',
      image: 'path/to/image2.jpg',
      description:
        'Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.',
      price: '1,223',
      going: '830 People Going',
    },
    {
      name: 'Giza',
      continent: 'Egypt',
      image: 'path/to/image3.jpg',
      description:
        'Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.',
      price: '1,200',
      going: '155 People Going',
    },
  ];

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
             Section 1
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
      <section className="container mx-auto px-4 py-16" style={{ backgroundColor: '#808080', padding: '40px 0', marginTop: '40px' }}>
      <div >
      <Grid container spacing={4}>
        {countries.map((country) => (
          <Grid item key={country.name} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <img
                  className="w-full h-40 object-cover"
                  src={country.image}
                  alt={country.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {country.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {country.continent}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={2}>
                    {country.description}
                  </Typography>
                  <div className="flex justify-between mt-4">
                    <Typography variant="body1" component="div">
                      From ${country.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {country.going}
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      </div>
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
