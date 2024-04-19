import React from 'react';
import { Container, Typography, IconButton } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HeaderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <Container maxWidth="lg" style={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: '70px', marginBottom: '20px' }}>
          <span>Stories of the </span>
          <span style={{ fontSize: '80px', fontFamily: 'cursive', color: 'red' }}>Refugee:</span>
        </Typography>

        <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginBottom: '20px' }}>
          The Cries and the Crisis
        </Typography>

        <Slider {...settings} className="image-slider">
          <div>
            <img src="../src/images/RefugeeImageForHeader1.png" alt="Image 1" style={imageStyle} />
          </div>
          <div>
            <img src="../src/images/RefugeeImageForHeader2.png" alt="Image 2" style={imageStyle} />
          </div>
          <div>
            <img src="../src/images/RefugeeImageForHeader1.png" alt="Image 3" style={imageStyle} />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '8px',
};

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    style={{
      position: 'absolute',
      top: '50%',
      right: '20px',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '50%',
      padding: '8px',
      zIndex: 1,
    }}
  >
    <ArrowForwardIosIcon />
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    style={{
      position: 'absolute',
      top: '50%',
      left: '20px',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '50%',
      padding: '8px',
      zIndex: 1,
    }}
  >
    <ArrowBackIosIcon />
  </IconButton>
);

export default HeaderSection;
