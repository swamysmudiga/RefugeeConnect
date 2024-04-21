import React, { useEffect, useState } from 'react';
import { Grid, Typography, Container } from '@mui/material';
import { RootState } from '../../store/root-reducers';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCampAsync } from '../../store/camp/camp-reducer-actions';
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
const CampPage = () => {


    const camps = useSelector((state: RootState) => state.camp.camps);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCampClick = (campId: string) => {
        console.log("Inside camp solo view.....", campId);
        navigate(`/refugee/camp/${campId}`);
    };
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchAllStory = async () => {
            await dispatch(getAllCampAsync());
            setIsLoaded(true);
        };

        fetchAllStory();
    }, [dispatch]);


    console.log("Input camps ", camps)

    return (
        <div>
            <Container
                maxWidth={false}
                disableGutters
                style={{
                    paddingLeft: '35px',
                    paddingRight: '35px',
                    paddingTop: '100px',
                    paddingBottom: '60px',
                    minHeight: '100vh', // Set minimum height to fill viewport
                    display: 'flex', // Use flex display to fill viewport
                    flexDirection: 'column', // Align children in column
                    justifyContent: 'space-between', // Align children with space between
                    background: 'linear-gradient(to bottom, #f0f0f0, #333333)',
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'opacity 1s ease, transform 1s ease',
                }}
            >
                <Typography
                    variant="h4"
                    align="center"
                    style={{ marginBottom: '20px', fontWeight: 'bold', color: 'white' }}
                >
                    Explore Camps
                </Typography>
                <Grid container spacing={4}>
                    {camps.map((camp) => (
                        <Grid item xs={12} sm={6} md={3} key={camp.campId}>
                            <div
                                style={{
                                    border: '1px solid #ccc',
                                    backgroundColor: 'white',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease-in-out',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.zIndex = '5000';
                                    e.currentTarget.style.backgroundColor = 'white';
                                    e.currentTarget.style.transform = 'scale(1.24)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.zIndex = '1';
                                    e.currentTarget.style.backgroundColor = 'white';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                                onClick={() => handleCampClick(camp.campId)}
                            >
                                {/* Display camp image */}
                                <img
                                    src={`http://localhost:4000/${camp.campImage}`}
                                    alt={camp.campName}
                                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
                                />
                                {/* Display camp title */}
                                <Typography
                                    variant="h6"
                                    style={{ marginTop: '10px', fontWeight: 'bold' }}
                                >
                                    {camp.campName}
                                </Typography>
                                {/* Display camp location */}
                                <Typography variant="body2" style={{ color: 'gray' }}>
                                    Location: {camp.campLocation}
                                </Typography>
                                {/* Display camp capacity */}
                                <Typography variant="body2" style={{ color: 'gray' }}>
                                    Capacity: {camp.campCapacity}
                                </Typography>
                                {/* Display camp occupancy */}
                                <Typography variant="body2" style={{ color: 'gray' }}>
                                    Occupancy: {camp.campCurrentOccupancy}
                                </Typography>
                                {/* Display camp management */}
                                <Typography variant="body2" style={{ color: 'gray' }}>
                                    Management: {camp.campManagementName}
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <div style={{marginTop: '-35px'}}>
                <Footer/>
            </div>
        </div>

    );
};

export default CampPage;
