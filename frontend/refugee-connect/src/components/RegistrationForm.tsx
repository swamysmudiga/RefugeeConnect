import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Typography, Box, TextField, Button, RadioGroup, Radio, FormControlLabel, FormControl, FormLabel, Checkbox } from '@mui/material';

// Validation schemas
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
    .matches(/^[0-9]+$/, "Contact number must contain only digits")
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
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
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
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box width={{ xs: '90%', sm: '80%', md: '70%', lg: '50%', xl: '40%' }} p={4} bgcolor="background.paper" boxShadow={3} borderRadius={8}>
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Welcome to Refugee Connect
        </Typography>
        <Typography variant="h5" align="center" gutterBottom color="primary">
          Registration Form
        </Typography>
      <Formik
        initialValues={accountType === 'user' ? initialUserValues : initialRefugeeValues}
        validationSchema={accountType === 'user' ? userValidationSchema : refugeeValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form>
            <FormControl component="fieldset" fullWidth>
              <RadioGroup
                row
                aria-label="user-refugee"
                name="accountType"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <FormControlLabel value="user" control={<Radio />} label="User" />
                <FormControlLabel value="refugee" control={<Radio />} label="Refugee" />
              </RadioGroup>
            </FormControl>

              {/* Shared Fields */}
              <Box mt={4}>
                <Field as={TextField} name="username" label="Username" fullWidth margin="normal" />
                <div style={errorStyle}><ErrorMessage name="username" /></div>
                <Field as={TextField} type="password" name="password" label="Password" fullWidth margin="normal" />
                <div style={errorStyle}><ErrorMessage name="password" /></div>
                <Field as={TextField} name="email" label="Email" fullWidth margin="normal" />
                <div style={errorStyle}><ErrorMessage name="email" /></div>
              </Box>

              {/* User Specific Fields */}
              {accountType === 'user' && (
                <Box mt={4}>
                  <Field as={TextField} name="contact_no" label="Contact Number" fullWidth margin="normal" />
                  <div style={errorStyle}><ErrorMessage name="contact_no" /></div>
                </Box>
              )}

              {/* Refugee Specific Fields */}
              {accountType === 'refugee' && (
                <>
                  <Box mt={4}>
                    <Field as={TextField} name="name" label="Full Name" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="name" /></div>
                    <Field as={TextField} name="ethnicity" label="Ethnicity" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="ethnicity" /></div>
                    <Field as={TextField} name="religion" label="Religion" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="religion" /></div>
                    <Field as={TextField} name="language" label="Language" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="language" /></div>
                  </Box>
                  <Box mt={4}>
                    <Field as={TextField} name="health" label="Health Condition" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="health" /></div>
                    <Field as={TextField} name="education" label="Education" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="education" /></div>
                    <Field as={TextField} name="occupation" label="Occupation" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="occupation" /></div>
                    <FormControlLabel
                      control={<Field as={Checkbox} name="has_dependents" />}
                      label="Has Dependents"
                    />
                    <div style={errorStyle}><ErrorMessage name="has_dependents" /></div>
                  </Box>
                  <Box mt={4}>
                    <Field as={TextField} name="previous_location" label="Previous Location" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="previous_location" /></div>
                    <Field as={TextField} name="current_location" label="Current Location" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="current_location" /></div>
                    <Field as={TextField} name="legal_status" label="Legal Status" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="legal_status" /></div>
                  </Box>
                  <Box mt={4}>
                    <Field as={TextField} name="assistance_needed" label="Assistance Needed" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="assistance_needed" /></div>
                    <Field as={TextField} name="age" label="Age" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="age" /></div>
                    <Field as={TextField} name="nationality" label="Nationality" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="nationality" /></div>
                    <Field as={TextField} name="gender" label="Gender" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="gender" /></div>
                    <Field as={TextField} name="dob" type="date" label="Date of Birth" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="dob" /></div>
                  </Box>
                  <Box mt={4}>
                    <Field as={TextField} name="address" label="Address" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="address" /></div>
                    <Field as={TextField} name="phone_no" label="Phone Number" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="phone_no" /></div>
                    <Field as={TextField} name="blood_type" label="Blood Type" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="blood_type" /></div>
                    <Field as={TextField} name="height" label="Height" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="height" /></div>
                    <Field as={TextField} name="weight" label="Weight" fullWidth margin="normal" />
                    <div style={errorStyle}><ErrorMessage name="weight" /></div>
                  </Box>
                </>
              )}

              <Box mt={4}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={!isValid || !dirty}
                >
                  Submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default RegistrationForm;
