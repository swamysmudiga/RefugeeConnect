import React, { useEffect } from 'react';
import { Grid, Typography, Container } from '@mui/material';
import { RootState } from '../../store/root-reducers';
import {  useSelector , useDispatch } from 'react-redux';
import { getAllCampAsync } from '../../store/camp/camp-reducer-actions';
import { useNavigate } from 'react-router-dom'
const CampPage = () => {


    const camps = useSelector((state: RootState) => state.camp.camps); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCampClick = (campId : string) => {
        console.log("Inside camp solo view.....", campId);
        navigate(`/refugee/camp/${campId}`);
    };

    useEffect(() => {
        const fetchAllStory = async () => {
          await dispatch(getAllCampAsync());
        };
    
        fetchAllStory();
      }, [dispatch]);


    console.log("Input camps ", camps)

    return (
        <Container
            maxWidth={false}
            disableGutters
            style={{
                padding: '20px',
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Typography
                variant="h4"
                align="center"
                style={{ marginBottom: '20px', fontWeight: 'bold' }}
            >
                Explore Camps
            </Typography>
            <Grid container spacing={4}>
                {camps.map((camp) => (
                    <Grid item xs={12} sm={6} md={4} key={camp.campId}>
                        <div
                            style={{
                                border: '1px solid #ccc',
                                padding: '10px',
                                borderRadius: '8px',
                                cursor: 'pointer',
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
    );
};

export default CampPage;
