import React from 'react';
import { Grid, Typography, Container } from '@mui/material';

const camps = [
    {
        campId: 'cam_1',
        campName: 'Lakeview Camp',
        campCapacity: 150,
        campLocation: 'Lake District',
        campImage: 'https://via.placeholder.com/300x200',
        campCurrentOccupancy: 120,
        campManagementName: 'Lakeview Management',
        campSecurityLevel: 'High',
        SupportingOrganizations: [
            { supportingOrganizationID: 1, SupportingOrganizationName: 'Lake Trust' },
            { supportingOrganizationID: 2, SupportingOrganizationName: 'Green Foundation' }
        ],
        Infrastructure: 'Water facilities, WiFi, Medical center',
        personId: 101,
        donationId: 1001,
        donationAmount: 10000,
        campFacilities: [
            { campFacilityID: 1, campFacilityName: 'Sports Complex' },
            { campFacilityID: 2, campFacilityName: 'Dining Hall' }
        ],
        campServices: [
            { campServiceID: 1, campServiceName: 'Counseling' },
            { campServiceID: 2, campServiceName: 'Medical Care' }
        ]
    },
    {
        campId: 'cam_2',
        campName: 'Mountain Retreat',
        campCapacity: 200,
        campLocation: 'Rocky Mountains',
        campImage: 'https://via.placeholder.com/300x200',
        campCurrentOccupancy: 160,
        campManagementName: 'Mountain Retreat Management',
        campSecurityLevel: 'Medium',
        SupportingOrganizations: [
            { supportingOrganizationID: 3, SupportingOrganizationName: 'Mountain Safety' },
            { supportingOrganizationID: 4, SupportingOrganizationName: 'Wildlife Association' }
        ],
        Infrastructure: 'Shelter, Medical center, WiFi',
        personId: 102,
        donationId: 1002,
        donationAmount: 8000,
        campFacilities: [
            { campFacilityID: 3, campFacilityName: 'Climbing Wall' },
            { campFacilityID: 4, campFacilityName: 'Dining Hall' }
        ],
        campServices: [
            { campServiceID: 3, campServiceName: 'First Aid' },
            { campServiceID: 4, campServiceName: 'Guided Hikes' }
        ]
    },
    {
        campId: 'cam_3',
        campName: 'Forest Haven',
        campCapacity: 100,
        campLocation: 'Pine Forest',
        campImage: 'https://via.placeholder.com/300x200',
        campCurrentOccupancy: 80,
        campManagementName: 'Forest Haven Management',
        campSecurityLevel: 'Low',
        SupportingOrganizations: [
            { supportingOrganizationID: 5, SupportingOrganizationName: 'Forest Protection' },
            { supportingOrganizationID: 6, SupportingOrganizationName: 'Eco Group' }
        ],
        Infrastructure: 'Nature trails, Shelters',
        personId: 103,
        donationId: 1003,
        donationAmount: 5000,
        campFacilities: [
            { campFacilityID: 5, campFacilityName: 'Nature Center' },
            { campFacilityID: 6, campFacilityName: 'Camping Grounds' }
        ],
        campServices: [
            { campServiceID: 5, campServiceName: 'Wildlife Tours' },
            { campServiceID: 6, campServiceName: 'Campfire Events' }
        ]
    },
    {
        campId: 'cam_3',
        campName: 'Forest Haven',
        campCapacity: 100,
        campLocation: 'Pine Forest',
        campImage: 'https://via.placeholder.com/300x200',
        campCurrentOccupancy: 80,
        campManagementName: 'Forest Haven Management',
        campSecurityLevel: 'Low',
        SupportingOrganizations: [
            { supportingOrganizationID: 5, SupportingOrganizationName: 'Forest Protection' },
            { supportingOrganizationID: 6, SupportingOrganizationName: 'Eco Group' }
        ],
        Infrastructure: 'Nature trails, Shelters',
        personId: 103,
        donationId: 1003,
        donationAmount: 5000,
        campFacilities: [
            { campFacilityID: 5, campFacilityName: 'Nature Center' },
            { campFacilityID: 6, campFacilityName: 'Camping Grounds' }
        ],
        campServices: [
            { campServiceID: 5, campServiceName: 'Wildlife Tours' },
            { campServiceID: 6, campServiceName: 'Campfire Events' }
        ]
    },
    {
        campId: 'cam_3',
        campName: 'Forest Haven',
        campCapacity: 100,
        campLocation: 'Pine Forest',
        campImage: 'https://via.placeholder.com/300x200',
        campCurrentOccupancy: 80,
        campManagementName: 'Forest Haven Management',
        campSecurityLevel: 'Low',
        SupportingOrganizations: [
            { supportingOrganizationID: 5, SupportingOrganizationName: 'Forest Protection' },
            { supportingOrganizationID: 6, SupportingOrganizationName: 'Eco Group' }
        ],
        Infrastructure: 'Nature trails, Shelters',
        personId: 103,
        donationId: 1003,
        donationAmount: 5000,
        campFacilities: [
            { campFacilityID: 5, campFacilityName: 'Nature Center' },
            { campFacilityID: 6, campFacilityName: 'Camping Grounds' }
        ],
        campServices: [
            { campServiceID: 5, campServiceName: 'Wildlife Tours' },
            { campServiceID: 6, campServiceName: 'Campfire Events' }
        ]
    },
    {
        campId: 'cam_3',
        campName: 'Forest Haven',
        campCapacity: 100,
        campLocation: 'Pine Forest',
        campImage: 'https://via.placeholder.com/300x200',
        campCurrentOccupancy: 80,
        campManagementName: 'Forest Haven Management',
        campSecurityLevel: 'Low',
        SupportingOrganizations: [
            { supportingOrganizationID: 5, SupportingOrganizationName: 'Forest Protection' },
            { supportingOrganizationID: 6, SupportingOrganizationName: 'Eco Group' }
        ],
        Infrastructure: 'Nature trails, Shelters',
        personId: 103,
        donationId: 1003,
        donationAmount: 5000,
        campFacilities: [
            { campFacilityID: 5, campFacilityName: 'Nature Center' },
            { campFacilityID: 6, campFacilityName: 'Camping Grounds' }
        ],
        campServices: [
            { campServiceID: 5, campServiceName: 'Wildlife Tours' },
            { campServiceID: 6, campServiceName: 'Campfire Events' }
        ]
    }
    
];


const CampPage = () => {
    const handleCampClick = (camp: { campId: string; campName: string; campCapacity: number; campLocation: string; campImage: string; campCurrentOccupancy: number; campManagementName: string; campSecurityLevel: string; SupportingOrganizations: { supportingOrganizationID: number; SupportingOrganizationName: string; }[]; Infrastructure: string; personId: number; donationId: number; donationAmount: number; campFacilities: { campFacilityID: number; campFacilityName: string; }[]; campServices: { campServiceID: number; campServiceName: string; }[]; }) => {
        console.log(camp);
    };

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
                            onClick={() => handleCampClick(camp)}
                        >
                            {/* Display camp image */}
                            <img
                                src={camp.campImage}
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
