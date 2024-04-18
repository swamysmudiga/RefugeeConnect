import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Container,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { useSpring, animated } from 'react-spring';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

// Validation Schema
const resourceValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  contentType: Yup.string().required('Content Type is required'),
  location: Yup.string().required('Location is required'),
  isAvailable: Yup.boolean().required('Availability is required'),
});

// Initial Values
const initialResourceValues = {
  name: '',
  description: '',
  contentType: '',
  location: '',
  isAvailable: false,
  photo: null, // Added photo field
};

// Styled component for overlay
const Overlay = styled.div`
  background: linear-gradient(rgba(255,255,255,0.6), rgba(224,224,224,0.6), rgba(51,51,51,0.6)); /* Overlay to enhance readability */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ResourceAdditionPage = () => {
  const [showImage, setShowImage] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null); // Specify type as File | null

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (values: any, actions: { setSubmitting: (arg0: boolean) => void; }) => {
    try {
      // Simulate resource creation
      console.log('Resource values:', values);
      console.log('Selected Photo:', selectedPhoto); // Log selected photo
      actions.setSubmitting(false);
      toast.success('Resource added successfully!');
    } catch (error) {
      console.error('Error creating resource:', error);
      actions.setSubmitting(false);
      toast.error('Error creating resource!');
    }
  };

  // Animation for the form
  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, -50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  });

  // Image URL
  const imageUrl = "../src/images/addResource.jpg";

  return (
    <Overlay>
      <Container maxWidth="lg" style={{ marginTop: '20px', marginBottom: '40px', position: 'relative', height: 'calc(100% - 40px)' }}>
        <Grid container spacing={3} style={{ height: '100%' }}>
          <Grid item xs={12} md={6}>
            <animated.div style={{ ...formAnimation, height: '100%' }}>
              <Paper elevation={3} style={{ padding: '20px', position: 'relative', height: '85%' }}>
                <Typography variant="h4" align="center" color="primary" gutterBottom>
                  Add Resource
                </Typography>
                <Formik
                  initialValues={initialResourceValues}
                  validationSchema={resourceValidationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isValid, dirty, setFieldValue }) => (
                    <Form style={{ height: '100%' }}>
                      <Grid container spacing={2} style={{ height: '100%' }}>
                        <Grid item xs={12}>
                          <Field as={TextField} name="name" label="Name *" fullWidth />
                          <ErrorMessage name="name" render={msg => <div style={{ color: 'red' }}>{msg}</div>} />
                        </Grid>
                        <Grid item xs={12}>
                          <Field as={TextField} name="description" label="Description *" fullWidth />
                          <ErrorMessage name="description" render={msg => <div style={{ color: 'red' }}>{msg}</div>} />
                        </Grid>
                        <Grid item xs={12}>
                          <Field as={TextField} name="contentType" label="Content Type *" fullWidth />
                          <ErrorMessage name="contentType" render={msg => <div style={{ color: 'red' }}>{msg}</div>} />
                        </Grid>
                        <Grid item xs={12}>
                          <Field as={TextField} name="location" label="Location *" fullWidth />
                          <ErrorMessage name="location" render={msg => <div style={{ color: 'red' }}>{msg}</div>} />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={<Field as={Switch} type="checkbox" name="isAvailable" color="primary" />}
                            label="Available"
                          />
                          <ErrorMessage name="isAvailable" render={msg => <div style={{ color: 'red' }}>{msg}</div>} />
                        </Grid>
                        <Grid item xs={12}>
                          {/* Input for uploading photo */}
                          <input
                            id="photo"
                            name="photo"
                            type="file"
                            onChange={(event) => {
                              const file = event.currentTarget.files && event.currentTarget.files[0]; // Check if files exist before accessing
                              if (file) {
                                setFieldValue("photo", file); // Store selected photo in formik state
                                setSelectedPhoto(file); // Store selected photo in local state
                              }
                            }}
                            style={{ display: 'none' }}
                          />
                          <label htmlFor="photo">
                            <Button variant="outlined" component="span" fullWidth>
                              Upload Photo
                            </Button>
                          </label>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={!isValid || !dirty}
                          >
                            Add Resource
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Paper>
            </animated.div>
          </Grid>
          <Grid item xs={12} md={6} style={{ position: 'relative' }}>
            {showImage && (
              <Paper
                elevation={3}
                style={{
                  padding: '20px',
                  width: '100%',
                  height: '85%', // Adjusted height
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            )}
          </Grid>
        </Grid>
        <ToastContainer />
      </Container>
    </Overlay>
  );
};

export default ResourceAdditionPage;
