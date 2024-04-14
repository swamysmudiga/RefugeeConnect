import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Typography, TextField, Button, RadioGroup, Radio, FormControlLabel, FormControl, Checkbox, Paper, Grid, Container } from '@mui/material';
import '../App.css';
import refugeeImage from '../images/refugee.jpg';
import { Outlet } from "react-router-dom";

const userValidationSchema = Yup.object({
  username: Yup.string()
    .min(8, "Username should be of at least 8 characters.")
    .max(15, "Username cannot be more than 15 characters.")
    .required('Username is required'),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required('Password is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
    contact_no: Yup.string()
    .matches(/^[0-9]{10}$/, "Contact number must be number and 10 digits")
    .required('Contact number is required'),
});

const refugeeValidationSchema = Yup.object({
  username: Yup.string()
    .min(8, "Username should be of at least 8 characters.")
    .max(15, "Username cannot be more than 15 characters.")
    .required('Username is required'),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required('Password is required'),
  name: Yup.string().required('Name is required'),
  ethnicity: Yup.string().required('Ethnicity is required'),
  religion: Yup.string().required('Religion is required'),
  language: Yup.string().required('Language is required'),
  health: Yup.string().required('Health is required'),
  education: Yup.string().required('Education is required'),
  occupation: Yup.string().required('Occupation is required'),
  family_status: Yup.string().required('Family status is required'),
  has_dependents: Yup.boolean(),
  previous_location: Yup.string().required('Previous location is required'),
  current_location: Yup.string().required('Current location is required'),
  legal_status: Yup.string().required('Legal status is required'),
  assistance_needed: Yup.string().required('Assistance needed is required'),
  age: Yup.number().typeError('Age must be a number').positive().integer().required('Age is required'),
  nationality: Yup.string().required('Nationality is required'),
  gender: Yup.string().required('Gender is required'),
  dob: Yup.date().required('Date of Birth is required'),
  address: Yup.string().required('Address is required'),
  phone_no: Yup.string()
    .matches(/^[0-9]{10}$/, "Contact number must be number and 10 digits")
    .required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  blood_type: Yup.string().required('Blood type is required'),
  height: Yup.number().positive().required('Height must be a number'),
  weight: Yup.number().positive().required('Weight must be a number'),
});

// Initial values for user form
const initialUserValues = {
  username: '',
  password: '',
  email: '',
  contact_no: '',
};

// Initial values for refugee form
const initialRefugeeValues = {
  username: '',
  password: '',
  name: '',
  ethnicity: '',
  religion: '',
  language: '',
  health: '',
  education: '',
  occupation: '',
  family_status: '',
  has_dependents: false,
  previous_location: '',
  current_location: '',
  legal_status: '',
  assistance_needed: '',
  age: '',
  nationality: '',
  gender: '',
  dob: '',
  address: '',
  phone_no: '',
  email: '',
  blood_type: '',
  height: '',
  weight: '',
};

const RegistrationForm = () => {
    const [accountType, setAccountType] = useState('user');

    const handleSubmit = (values: any, actions: { setSubmitting: (arg0: boolean) => void; }) => {
      toast.success("Registration Successful!");
      console.log(values);
      actions.setSubmitting(false);
    };


  const errorStyle = { color: 'red', marginTop: '5px' };

  return (
    <Container maxWidth="md" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundImage: `url(${refugeeImage})`, backgroundSize: 'cover' }}>
        <Paper elevation={3} className="paper" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', borderRadius: '10px', width: '100%', maxWidth: '600px' }}>
            <Typography variant="h4" align="center" color="primary" gutterBottom>
                Welcome to Registration Form
            </Typography>
            <Formik
                initialValues={accountType === 'user' ? initialUserValues : initialRefugeeValues}
                validationSchema={accountType === 'user' ? userValidationSchema : refugeeValidationSchema}
                onSubmit={handleSubmit}
            >
                {({ isValid, dirty }) => (
                    <Form>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12}>
                                <FormControl component="fieldset" fullWidth>
                                    <RadioGroup
                                        row
                                        aria-label="accountType"
                                        name="accountType"
                                        value={accountType}
                                        onChange={(e : any ) => setAccountType(e.target.value)}
                                    >
                                        <FormControlLabel value="user" control={<Radio />} label="User" />
                                        <FormControlLabel value="refugee" control={<Radio />} label="Refugee" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Field as={TextField} name="username" label="Username" fullWidth margin="normal" />
                                <ErrorMessage name="username">{(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}</ErrorMessage>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Field as={TextField} type="password" name="password" label="Password" fullWidth margin="normal" />
                                <ErrorMessage name="password">{(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}</ErrorMessage>
                            </Grid>
                            <Grid item xs={12}>
                                <Field as={TextField} name="email" label="Email" fullWidth margin="normal" />
                                <ErrorMessage name="email">{(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}</ErrorMessage>
                            </Grid>
                            {accountType === 'user' && (
                                <Grid item xs={12}>
                                    <Field as={TextField} name="contact_no" label="Contact Number" fullWidth margin="normal" />
                                    <ErrorMessage name="contact_no">{(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}</ErrorMessage>
                                </Grid>
                            )}
                            {accountType === 'refugee' && renderRefugeeFields()}
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    disabled={!isValid || !dirty}
                                    style={{ marginTop: '2rem' }}
                                    
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </Paper>
    </Container>
);
}

function renderRefugeeFields() {
    return (
        <>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="name" label="Full Name" fullWidth margin="normal" />
            <ErrorMessage name="name">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="ethnicity" label="Ethnicity" fullWidth margin="normal" />
            <ErrorMessage name="ethnicity">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="religion" label="Religion" fullWidth margin="normal" />
            <ErrorMessage name="religion">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="language" label="Language" fullWidth margin="normal" />
            <ErrorMessage name="language">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="health" label="Health Condition" fullWidth margin="normal" />
            <ErrorMessage name="health">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="education" label="Education" fullWidth margin="normal" />
            <ErrorMessage name="education">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="occupation" label="Occupation" fullWidth margin="normal" />
            <ErrorMessage name="occupation">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={<Field as={Checkbox} name="has_dependents" />}
              label="Has Dependents"
            />
            <ErrorMessage name="has_dependents">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="previous_location" label="Previous Location" fullWidth margin="normal" />
            <ErrorMessage name="previous_location">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="current_location" label="Current Location" fullWidth margin="normal" />
            <ErrorMessage name="current_location">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="legal_status" label="Legal Status" fullWidth margin="normal" />
            <ErrorMessage name="legal_status">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="assistance_needed" label="Assistance Needed" fullWidth margin="normal" />
            <ErrorMessage name="assistance_needed">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="age" label="Age" fullWidth margin="normal" />
            <ErrorMessage name="age">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="nationality" label="Nationality" fullWidth margin="normal" />
            <ErrorMessage name="nationality">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="gender" label="Gender" fullWidth margin="normal" />
            <ErrorMessage name="gender">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
        <Field
            as={TextField}
            name="dob"
            type="date"
            label="Date of Birth"
            fullWidth
            margin="normal"
            InputLabelProps={{
            shrink: true, 
            }}
        />
        <ErrorMessage name="dob">
            {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
        </ErrorMessage>
        </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="address" label="Address" fullWidth margin="normal" />
            <ErrorMessage name="address">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="phone_no" label="Phone Number" fullWidth margin="normal" />
            <ErrorMessage name="phone_no">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="blood_type" label="Blood Type" fullWidth margin="normal" />
            <ErrorMessage name="blood_type">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="height" label="Height" fullWidth margin="normal" />
            <ErrorMessage name="height">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Field as={TextField} name="weight" label="Weight" fullWidth margin="normal" />
            <ErrorMessage name="weight">
              {(msg) => <div style={{ color: 'red', marginTop: '5px' }}>{msg}</div>}
            </ErrorMessage>
          </Grid>
        </>
      );
    }
  
  export default RegistrationForm;
