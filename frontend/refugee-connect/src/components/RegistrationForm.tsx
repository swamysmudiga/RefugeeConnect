import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Typography, TextField, Button, RadioGroup, Radio, FormControlLabel, FormControl, Paper, Grid, Container } from '@mui/material';
import refugeeImage from '../images/refugee.jpg';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createRegistration } from '../util/refugee-services';

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
  phone_no: Yup.string()
    .matches(/^[0-9]{10}$/, "Contact number must be number and 10 digits")
    .required('Contact number is required'),
    image: Yup.mixed().required("Image is required"),
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
  image: Yup.mixed().required("Image is required"),
});

const initialUserValues = {
  username: '',
  password: '',
  email: '',
  phone_no: '',
  image: null,
};

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
  image: null,
};

const RegistrationForm = () => {
  const [accountType, setAccountType] = useState('user');
  const [image, setImage] = useState<File>(); 
  const [imageName, setImageName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (values: { role: string; image: null; }, actions: { setSubmitting: (arg0: boolean) => void; }) => {
    toast.success("Registration Successful!");
    values.role = accountType; 
    //values.image = image; 
    console.log("Image from form ", image);
    const response = await createRegistration(values , image);
    actions.setSubmitting(false);
    navigate('/refugee/login'); 
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '7%', marginBottom: '40px', position: 'relative', height: 'calc(100% - 40px)' }}>
    <Grid container spacing={3} style={{ height: '100%' }}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px', position: 'relative', height: '85%' }}>
          <Typography variant="h4" align="center" color="primary" gutterBottom>
            Welcome to Registration Form
          </Typography>
          {/* Formik form */}
          <Formik
            initialValues={accountType === 'user' ? { ...initialUserValues, role: 'user' } : { ...initialRefugeeValues, role: 'refugee' }}
            validationSchema={accountType === 'user' ? userValidationSchema : refugeeValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid, dirty, values, setFieldValue }) => (
              <Form>
                <Grid container spacing={2} justifyContent="center">
                  {/* Account type radio buttons */}
                  <Grid item xs={12}>
                    <FormControl component="fieldset" fullWidth>
                      <RadioGroup
                        row
                        aria-label="accountType"
                        name="accountType"
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value)}
                      >
                        <FormControlLabel value="user" control={<Radio />} label="User" />
                        <FormControlLabel value="refugee" control={<Radio />} label="Refugee" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  {/* User fields */}
                  <Grid item xs={12} md={6}>
                    <Field as={TextField} name="username" label="Username" fullWidth margin="normal" />
                    <ErrorMessage name="username" component="div" className="field-error" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Field as={TextField} type="password" name="password" label="Password" fullWidth margin="normal" />
                    <ErrorMessage name="password" component="div" className="field-error" />
                  </Grid>
                  <Grid item xs={12}>
                    <Field as={TextField} name="email" label="Email" fullWidth margin="normal" />
                    <ErrorMessage name="email" component="div" className="field-error" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Field as={TextField} name="phone_no" label="Phone Number" fullWidth margin="normal" />
                    <ErrorMessage name="phone_no" component="div" className="field-error" />
                  </Grid>
                  {/* Image upload */}
                  <Grid item xs={12}>
                    <input
                      id="userImage"
                      name="image"
                      type="file"
                      onChange={(event) => {
                        if (event.currentTarget.files && event.currentTarget.files.length > 0) {
                          const file = event.currentTarget.files[0];
                          setImage(file);
                          setFieldValue("image", file);
                          setImageName(file.name);
                        }
                      }}
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="userImage">
                      <Button variant="outlined" component="span" fullWidth>
                        Upload Image
                      </Button>
                    </label>
                    {imageName && <Typography variant="caption" style={{ marginTop: '0.5rem' }}>{imageName}</Typography>}
                    <ErrorMessage name="image" component="div" className="field-error" />
                  </Grid>
                  {/* Refugee specific fields */}
                  {accountType === 'refugee' && (
                    <>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="name" label="Full Name" fullWidth margin="normal" />
                        <ErrorMessage name="name" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="ethnicity" label="Ethnicity" fullWidth margin="normal" />
                        <ErrorMessage name="ethnicity" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="religion" label="Religion" fullWidth margin="normal" />
                        <ErrorMessage name="religion" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="language" label="Language" fullWidth margin="normal" />
                        <ErrorMessage name="language" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="health" label="Health Condition" fullWidth margin="normal" />
                        <ErrorMessage name="health" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="education" label="Education" fullWidth margin="normal" />
                        <ErrorMessage name="education" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="occupation" label="Occupation" fullWidth margin="normal" />
                        <ErrorMessage name="occupation" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="family_status" label="Family Status" fullWidth margin="normal" />
                        <ErrorMessage name="family_status" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="previous_location" label="Previous Location" fullWidth margin="normal" />
                        <ErrorMessage name="previous_location" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="current_location" label="Current Location" fullWidth margin="normal" />
                        <ErrorMessage name="current_location" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="legal_status" label="Legal Status" fullWidth margin="normal" />
                        <ErrorMessage name="legal_status" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="assistance_needed" label="Assistance Needed" fullWidth margin="normal" />
                        <ErrorMessage name="assistance_needed" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="age" label="Age" fullWidth margin="normal" />
                        <ErrorMessage name="age" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="nationality" label="Nationality" fullWidth margin="normal" />
                        <ErrorMessage name="nationality" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="gender" label="Gender" fullWidth margin="normal" />
                        <ErrorMessage name="gender" component="div" className="field-error" />
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
                        <ErrorMessage name="dob" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="address" label="Address" fullWidth margin="normal" />
                        <ErrorMessage name="address" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="blood_type" label="Blood Type" fullWidth margin="normal" />
                        <ErrorMessage name="blood_type" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="height" label="Height" fullWidth margin="normal" />
                        <ErrorMessage name="height" component="div" className="field-error" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field as={TextField} name="weight" label="Weight" fullWidth margin="normal" />
                        <ErrorMessage name="weight" component="div" className="field-error" />
                      </Grid>
                    </>)
                  }
                  
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
      </Grid>
      <Grid item xs={12} md={6} style={{ position: 'relative' }}>
        <Paper
          elevation={3}
          style={{
            padding: '20px',
            width: '100%',
            height: '85%',
            backgroundImage: `url(${refugeeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </Grid>
  </Container>
);}
  
export default RegistrationForm;