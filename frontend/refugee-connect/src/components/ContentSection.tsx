import React, { useRef, useState } from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, IconButton, CardMedia } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Facebook, Twitter, LinkedIn, YouTube } from '@mui/icons-material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
 
const ContentSection = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <ArrowForwardIos />,
    prevArrow: <ArrowBackIos />,
    afterChange: (current: number) => setCurrentSlide(current)
  };
 
  const cultures = [
    {
      title: 'Economic Contributions',
      description: 'Refugees can make significant economic contributions to their host countries. Many refugees are skilled professionals, entrepreneurs, and workers who bring diverse talents, knowledge, and innovation. By participating in the labor market and starting businesses, refugees contribute to economic growth, job creation, and cultural diversity. Their entrepreneurial spirit often leads to the creation of new opportunities and stable economies.'
    },
    {
      title: 'Cultural Enrichment',
      description: 'Refugees bring with them rich cultural heritage, traditions, and experiences. Their presence can enrich the cultural tapestry of host communities, promoting cross-cultural understanding, tolerance, and appreciation. By sharing their stories and traditions, refugees contribute to the cultural diversity and vibrancy of society. Additionally, their integration into local arts, cuisine, and festivities adds layers of depth to community life, fostering unity.'
    },
    {
      title: 'Educational Opportunities',
      description: 'Providing access to education for refugee children and youth is essential for their long-term well-being and future prospects. Education empowers refugees to acquire knowledge, skills, and qualifications necessary for meaningful employment, social integration, and civic engagement. By investing in refugee education, societies can unlock human potential and promote sustainable development.'
    },
    {
      title: 'Labor Market Dynamics',
      description: 'In some cases, refugees fill critical gaps in the labor market, particularly in sectors facing shortages of skilled workers or manual labor. By contributing to industries such as healthcare, agriculture, construction, and hospitality, refugees play a vital role in sustaining economic activities and meeting workforce demands. Moreover, refugees often display strong work ethic and adaptability, making them valuable assets to employers.'
    }
  ];
 
  const alternatingSections = [
    {
      title: 'Refugee Connect Camp',
      description: 'Welcome to Refugee Connect, a beacon of hope and solidarity established on April 15, 2024, to provide a haven for those displaced by conflict, persecution, or hardship. Nestled within a serene landscape, Refugee Connect Camp embodies a spirit of compassion and resilience, offering a safe refuge where individuals and families can find solace, support, and a sense of community. Our camp is designed with careful consideration for the well-being and dignity of every resident. But Refugee Connect is more than just a place to seek refuge; it is a vibrant community where friendships are forged, cultures are celebrated, and dreams are nurtured. Through cultural exchange programs, artistic endeavors, and communal gatherings, we foster a sense of belonging and solidarity among residents from diverse backgrounds. Welcome to our community; welcome to Refugee Connect Camp. ',
      imageUrl: '../src/images/refugee_home1.jpg',
      imageFirst: true,
    },
    {
      title: 'Our Mission and Vision',
      description: 'At Refugee Connect, our mission is clear: to provide a better life to those who have been uprooted from their homes and find themselves in need of shelter, safety, and support. We are dedicated to offering refuge to individuals and families fleeing conflict, persecution, and hardship, ensuring they have access to the resources and assistance necessary to rebuild their lives with dignity and hope. We envision a world where no one is forced to endure the hardships of displacement alone. Our vision at Refugee Connect is to be a beacon of compassion and solidarity, providing sanctuary and opportunities for growth to those who seek shelter within our community. Through our unwavering commitment to serving others, we strive to create a future where every individual has the chance to thrive, regardless of the challenges they have faced. With over 50,000 lives touched and counting, we are driven by the belief that together, we can make a meaningful difference in the lives of those in need.',
      imageUrl: '../src/images/refugee_home2.jpg',
      imageFirst: false,
    },
  ];
 
  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext?.();
    }
  };
 
  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev?.();
    }
  };
 
  return (
    <div style={{ overflowY: 'auto', maxHeight: '100vh', position: 'relative' }}>
    <section style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', filter: 'blur(1.5px)' }}>
        <img src="../src/images/refugee_main.jpg" alt="Refugee Thoughts" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
        <Typography variant="h5" style={{ fontWeight: 'bold', fontStyle: 'italic', fontFamily: 'Verdana, sans-serif', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '48px', lineHeight: '1.2' }}>
          "A refugee is someone who survived and who can create the future."
        </Typography>
      </div>
    </section>
 
    <Container maxWidth="lg" style={{ padding: '40px 0' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
      
        {/* First Set of Culture Cards */}
              <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom style={{ borderRadius: '15px', backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '20px' }}>
          How Refugee Matters!
        </Typography>
        <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
          <Slider {...sliderSettings} ref={sliderRef}>
            {cultures.map((culture, index) => (
              <div key={index}>
                <Card style={{ boxShadow: 'none', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fff' }}>
                  <CardContent>
                    <Typography variant="h5" style={{ color: '#333' }}>{culture.title}</Typography>
                    <Typography variant="body2">{culture.description}</Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton onClick={goToPrevSlide}><ArrowBackIos /></IconButton>
            <IconButton onClick={goToNextSlide}><ArrowForwardIos /></IconButton>
          </div>
        </div>
      </Grid>
        
      </Grid>
    </Container>
          {alternatingSections.map((section, index) => (
        <Container key={index} maxWidth="lg" style={{ padding: '40px 0' }}>
          <Grid container spacing={4} alignItems="center" direction={section.imageFirst ? 'row' : 'row-reverse'}>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image={section.imageUrl}
                alt={section.title}
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} md={6} style={{ color: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h4" gutterBottom>
                {section.title}
              </Typography>
              <Typography variant="body1">
                {section.description}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      ))}
 
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
    </div>
  );
};
 
export default ContentSection;