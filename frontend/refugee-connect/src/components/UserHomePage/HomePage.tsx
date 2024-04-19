import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const UserHomePage = () => {
    // Define the animation properties using useSpring
    const fadeInStyle = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 2000 },
    });

    return (
        <Container style={{ height: '100vh', overflowY: 'auto', padding: '0px', maxWidth: '100vw', backgroundColor: 'lightgrey' }}>
            <Grid container spacing={4} style={{ height: '100%' }}>
                {/* Resource section */}
                <Grid item xs={12} md={12}>
                    {/* Outer container with padding for the resource section */}
                    <Container style={{ padding: '20px', maxWidth: '90%', border: '1px solid #dcdcdc', borderRadius: '20px', backgroundColor: 'white' }}>
                        <Grid container spacing={4} style={{ alignItems: 'center' }}>
                            {/* Resource image */}
                            <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                <animated.img
                                    src="../src/images/UserHomeResource.png"
                                    alt="Resource"
                                    style={{ maxWidth: '85%', maxHeight: '80%', ...fadeInStyle }}
                                />
                            </Grid>
                            {/* Resource text */}
                            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '10%' }}>
                                <Typography
                                    variant="h4"
                                    align="center"
                                    gutterBottom
                                    style={{ fontWeight: 'bold' }}
                                >
                                    What is a Resource?
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="center"
                                    paragraph
                                >
                                    A resource could refer to various types of materials, services, or facilities that are available to support individuals or communities in need. These resources can include food, shelter, medical supplies, educational materials, or any other essential items or services.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="center"
                                    paragraph
                                    style={{ fontWeight: 'bold' }}
                                >
                                    Have extra resources at hand?
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="center"
                                    paragraph
                                >
                                    Consider contributing them to make a positive impact! By adding your surplus to our community, you can share your abundance and help those who could benefit from your generosity.
                                </Typography>
                                <Grid
                                    container
                                    justifyContent="center"
                                    spacing={2}
                                    style={{ marginTop: '12px' }}
                                >
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                        >
                                            View All Resources
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                        >
                                            Add New Resource
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>

                {/* Donation section */}
                <Grid item xs={12} md={12} style={{ marginTop: '15px' }}>
                    {/* Outer container with padding for the donation section */}
                    <Container style={{ padding: '20px', maxWidth: '90%', border: '1px solid #dcdcdc', borderRadius: '20px', backgroundColor: 'white' }}>
                        <Grid container spacing={4} style={{ alignItems: 'center' }}>
                            {/* Donation text */}
                            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
                                    Donate to Help
                                </Typography>
                                <Typography variant="body1" align="center" paragraph>
                                    Your donation can make a significant difference in the lives of those in need. By contributing, you are helping provide essential resources such as food, shelter, and medical supplies to people who require assistance. Together, we can create a positive impact on the community.
                                </Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
                                    Donate Now
                                </Button>
                            </Grid>
                            {/* Donation image */}
                            <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <animated.img
                                    src="../src/images/DonateUs.jpg"
                                    alt="Donate"
                                    style={{ maxWidth: '90%', maxHeight: '85%', ...fadeInStyle }}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UserHomePage;
