import React, { useEffect, useState } from 'react';
import { Container, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid } from '@mui/material';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import UserStory4 from '../images/UserStory-4.jpg';
import UserStory1 from '../images/UserStory-1.jpg';
import UserStory2 from '../images/UserStory-2.jpg';
import UserStory3 from '../images/UserStory-3.jpg';
import UserStory5 from '../images/UserStory-5.jpg';
import UserStory6 from '../images/UserStory-6.jpg';
import { addStoryAsync , removeStoryAsync , updateStoryAsync , getAllStoryAsync } from '../store/story/story-reducer-actions'
import {  useSelector , useDispatch } from 'react-redux';
import { RootState } from '../store/root-reducers'; 
import { number } from 'yup';

// Define the Story interface
export interface Story {
    storyId: number;
    refugeeId: number;
    title: string;
    description: string;
    image: string;
  }

const UserStories: React.FC = () => {
    const [selectedStory, setSelectedStory] = useState<Story | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const story = useSelector((state: RootState) => state.story.userStories); 
    console.log("story is ",story);
    
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllStory = async () => {
          await dispatch(getAllStoryAsync());
        };
    
        fetchAllStory();
      }, [dispatch]);

    const handleModalDelete = (storyId : number) =>{

        const fetchAllStory = async () => {
            await dispatch(removeStoryAsync(storyId));
            setSelectedStory(null);
          };
      
          fetchAllStory();

    }

    // Define arrow components for the slider
    const SamplePrevArrow = ({ className, style, onClick }: any) => (
        <div
            className={className}
            style={{
                ...style,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                zIndex: 1,
                margin: '0 10px',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            &larr;
        </div>
    );

    const SampleNextArrow = ({ className, style, onClick }: any) => (
        <div
            className={className}
            style={{
                ...style,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                zIndex: 1,
                margin: '0 10px',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            &rarr;
        </div>
    );

    const sliderSettings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };

    const handleStoryClick = (story: Story) => {
        setSelectedStory(story);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedStory(null);
    };

    const truncateDescription = (description: string): string => {
        const words = description.split(' ');
        if (words.length > 10) {
            return words.slice(0, 10).join(' ') + '...';
        }
        return description;
    };

    return (
        <div style={{ width: '100%' }}>
            <div style={{ textAlign: 'center' }}>
                <section style={{ padding: '40px' }}>
                    <Container>
                        <Typography
                            variant="h4"
                            gutterBottom
                            style={{ fontWeight: 'bold', color: 'black' }}
                        >
                            Our Top User Stories
                        </Typography>

                        <Slider {...sliderSettings}>
                            {story.map((story, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleStoryClick(story)}
                                    style={{
                                        cursor: 'pointer',
                                        marginRight: '20px',
                                        padding: '10px',
                                    }}
                                >
                                    <img
                                        src={`http://localhost:4000/${story.image}`}
                                        alt={story.title}
                                        style={{
                                            width: '95%',
                                            height: '200px', // Fixed height for all images
                                            cursor: 'pointer',
                                            borderRadius: '10px',
                                            objectFit: 'cover', // Maintain aspect ratio and fill the width and height
                                        }}
                                    />
                                    <div style={{ cursor: 'pointer' }}>
                                        <Typography
                                            variant="h5"
                                            style={{ width: '95%' , fontSize: '20px', fontWeight: 'bold' }}
                                        >
                                            {story.title}
                                        </Typography>


                                        {/* Display the truncated description */}
                                        <Typography
                                            variant="h5"
                                            style={{ width: '95%' , fontSize: '16px' }}
                                        >
                                            {truncateDescription(story.description)}
                                        </Typography>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Container>
                </section>

                {/* Modal */}
                {selectedStory && (
                    <Dialog open={isModalOpen} onClose={handleModalClose} fullWidth maxWidth="md">
                        <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            {selectedStory.title}
                        </DialogTitle>
                        <DialogContent>
                            <Grid container spacing={2}>
                                {/* Left column for the image */}
                                <Grid item xs={6}>
                                    <img src={selectedStory.image} alt={selectedStory.title} style={{ width: '100%' }} />
                                </Grid>
                                {/* Right column for the title and description */}
                                <Grid item xs={6}>
                                    {/* Display the full description */}
                                    <Typography variant="body1" dangerouslySetInnerHTML={{ __html: selectedStory.description }} />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={() => handleModalDelete(selectedStory.storyId)} color="primary">
                                Delete
                            </Button>
                            <Button onClick={handleModalClose} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                )}
            </div>
        </div>
    );
};

export default UserStories;
