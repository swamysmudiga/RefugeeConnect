import React from 'react';
import { Grid, Typography, Container } from '@mui/material';

const resources = [
    {
        id: 'res_1',
        name: 'Resource 1',
        description: 'This is the first resource.',
        contentType: 'Type A',
        createdDate: new Date('2023-01-01'),
        userId: 'user_1',
        location: 'Location 1',
        image: 'https://via.placeholder.com/300x200',
        isAvailable: true,
    },
    {
        id: 'res_2',
        name: 'Resource 2',
        description: 'This is the second resource.',
        contentType: 'Type B',
        createdDate: new Date('2023-02-15'),
        userId: 'user_2',
        location: 'Location 2',
        image: 'https://via.placeholder.com/300x200',
        isAvailable: false,
    },
    {
        id: 'res_2',
        name: 'Resource 2',
        description: 'This is the second resource.',
        contentType: 'Type B',
        createdDate: new Date('2023-02-15'),
        userId: 'user_2',
        location: 'Location 2',
        image: 'https://via.placeholder.com/300x200',
        isAvailable: false,
    },
    {
        id: 'res_2',
        name: 'Resource 2',
        description: 'This is the second resource.',
        contentType: 'Type B',
        createdDate: new Date('2023-02-15'),
        userId: 'user_2',
        location: 'Location 2',
        image: 'https://via.placeholder.com/300x200',
        isAvailable: false,
    },
    {
        id: 'res_2',
        name: 'Resource 2',
        description: 'This is the second resource.',
        contentType: 'Type B',
        createdDate: new Date('2023-02-15'),
        userId: 'user_2',
        location: 'Location 2',
        image: 'https://via.placeholder.com/300x200',
        isAvailable: false,
    },
    {
        id: 'res_2',
        name: 'Resource 2',
        description: 'This is the second resource.',
        contentType: 'Type B',
        createdDate: new Date('2023-02-15'),
        userId: 'user_2',
        location: 'Location 2',
        image: 'https://via.placeholder.com/300x200',
        isAvailable: false,
    },
    {
        id: 'res_2',
        name: 'Resource 2',
        description: 'This is the second resource.',
        contentType: 'Type B',
        createdDate: new Date('2023-02-15'),
        userId: 'user_2',
        location: 'Location 2',
        image: 'https://via.placeholder.com/300x200',
        isAvailable: false,
    },
    // Add more resources here...
];

const ResourcePage = () => {
    const handleResourceClick = (resource: { id: string; name: string; description: string; contentType: string; createdDate: Date; userId: string; location: string; image: string; isAvailable: boolean; }) => {
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
                {resources.map((resource) => (
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
                                src={resource.image}
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