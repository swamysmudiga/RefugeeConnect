import React, { useEffect } from 'react';
import { Grid, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/root-reducers';
import { useSelector , useDispatch } from 'react-redux'
import { getAllResourceAsync } from '../../store/resource/resource-reducer-actions';

const ResourcePage = () => {
    const navigate = useNavigate();
    const resources = useSelector((state: RootState) => state.resources.resources); 
    const dispatch = useDispatch();

    useEffect(()=>{

        const fetchAllStory = async () => {
            await dispatch(getAllResourceAsync());
          };
      
          fetchAllStory();

    },[]);
    
    const handleResourceClick = (resource: { id: string; name: string; description: string; contentType: string; createdDate: Date; userId: string; location: string; image: string; isAvailable: boolean; }) => {
        
        navigate(`/refugee/viewResource/${resource.id}`);
        console.log(resource);
    }
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
                Explore Resources
            </Typography>
            <Grid container spacing={4}>
                {resources.map((resource : any) => (
                    <Grid item xs={12} sm={6} md={4} key={resource.id}>
                        <div
                            style={{
                                border: '1px solid #ccc',
                                padding: '10px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleResourceClick(resource)}
                        >
                            {/* Display resource image */}
                            <img
                                src={`http://localhost:4000/${resource.image}`}
                                alt={resource.name}
                                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
                            />
                            {/* Display resource title */}
                            <Typography
                                variant="h6"
                                style={{ marginTop: '10px', fontWeight: 'bold' }}
                            >
                                {resource.name}
                            </Typography>
                            {/* Display resource type */}
                            <Typography variant="body2" style={{ color: 'gray' }}>
                                {resource.contentType}
                            </Typography>
                            {/* Display resource created date */}
                            <Typography variant="body2" style={{ color: 'gray' }}>
                                Created Date: {new Date(resource.createdDate).toLocaleDateString()}
                            </Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ResourcePage;
