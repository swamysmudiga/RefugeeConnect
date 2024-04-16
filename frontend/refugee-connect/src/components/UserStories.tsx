import React, { useState } from 'react';
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

// Define the Story interface
interface Story {
    title: string;
    image: string;
    description: string;
}

const UserStories: React.FC = () => {
    const [selectedStory, setSelectedStory] = useState<Story | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const stories: Story[] = [
        {
            title: "Amina's Journey from Syria",
            image: UserStory1,
            description: 'Amina was a school teacher in Aleppo when the conflict started. She fled with her family to Turkey, leaving behind everything they owned. With the help of friends, they crossed the border and found temporary refuge in a camp. Life in the camp was difficult, but she was grateful for safety. Eventually, Amina and her family were resettled in Germany, where she began teaching Arabic to other refugee children while also learning German.',
        },
        {
            title: "Carlos' Escape from Venezuela",
            image: UserStory2,
            description: "Carlos was a university student when Venezuela's political crisis worsened. Facing food shortages and violence, he decided to leave for Colombia. The journey was long and perilous, but Carlos eventually made it to Bogotá, where he found work as a laborer. He continues to support his family back home and hopes to one day return to finish his studies.",
        },
        {
            title: "Linh's Resettlement from Myanmar",
            image: UserStory3,
            description: "Linh, a member of the Rohingya minority in Myanmar, faced persecution and violence in her home country. She and her family fled to a refugee camp in Bangladesh, where they spent years living in challenging conditions. With the help of international organizations, Linh and her family were resettled in Australia. Linh now works in a community center helping other refugees adjust to their new lives.",
        },
        {
            title: "Suleiman's New Life from Sudan",
            image: UserStory4,
            description: "Suleiman fled the conflict in Darfur when he was a teenager. He spent several years in a refugee camp in Chad before being resettled in the United States. Despite facing numerous challenges, Suleiman was determined to build a new life. He found work in a restaurant and later started his own catering business. Today, Suleiman uses his culinary skills to introduce Sudanese cuisine to his new community.",
        },
        {
            title: "Fatima's Struggle from Afghanistan",
            image: UserStory5,
            description: "Fatima's family fled Afghanistan due to ongoing violence and insecurity. They traveled to Pakistan, where they lived as undocumented refugees for many years. Eventually, Fatima's family was granted asylum in Canada. Fatima now works as a nurse, helping other newcomers access healthcare services and supporting her own family.",
        },
        {
            title: "Samuel's Pursuit of Peace from Eritrea",
            image: UserStory6,
            description: "Samuel was conscripted into indefinite military service in Eritrea. Seeking freedom and a better future, he escaped and made his way to Ethiopia, where he sought refuge. After spending some time in a refugee camp, Samuel was resettled in Norway. He now works as a translator and is actively involved in advocacy for human rights and refugee support.",
        },
    ];

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
                <section style={{ backgroundColor: 'lightgrey', padding: '40px' }}>
                    <Container>
                        <Typography
                            variant="h4"
                            gutterBottom
                            style={{ fontWeight: 'bold', color: 'black' }}
                        >
                            Our Top User Stories
                        </Typography>

                        <Slider {...sliderSettings}>
                            {stories.map((story, index) => (
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
                                        src={story.image}
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
