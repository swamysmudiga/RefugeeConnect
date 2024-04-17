import React from 'react';
import { Container, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeaderSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Container maxWidth="lg">
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

// Inline CSS for custom arrows
const arrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  padding: '10px 20px',
  borderRadius: '5px',
  zIndex: '1',
};

const nextArrowStyle = {
  ...arrowStyle,
  right: '20px',
};

const prevArrowStyle = {
  ...arrowStyle,
  left: '20px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
};

const NextArrow = ({ onClick }) => (
  <div style={nextArrowStyle} onClick={onClick}>
    Next
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div style={prevArrowStyle} onClick={onClick}>
    Prev
  </div>
);

export default HeaderSection;
