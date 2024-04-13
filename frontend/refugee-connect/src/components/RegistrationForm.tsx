import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
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
  contact_no: Yup.number()
    .typeError('Contact must be a number')
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
  has_dependents: Yup.boolean().required('Dependents status is required'),
  previous_location: Yup.string().required('Previous location is required'),
  current_location: Yup.string().required('Current location is required'),
  legal_status: Yup.string().required('Legal status is required'),
  assistance_needed: Yup.string().required('Assistance needed is required'),
  age: Yup.number().positive().integer().required('Age is required'),
  nationality: Yup.string().required('Nationality is required'),
  gender: Yup.string().required('Gender is required'),
  dob: Yup.date().required('Date of Birth is required'),
  address: Yup.string().required('Address is required'),
  phone_no: Yup.string().required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  blood_type: Yup.string().required('Blood type is required'),
  height: Yup.number().positive().required('Height is required'),
  weight: Yup.number().positive().required('Weight is required'),
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
 
    // Styling objects
    const inputStyle = {
        display: 'block',
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
    };
 
    const errorStyle = {
        color: 'red',
        marginBottom: '10px',
    };
 
    const submitButtonStyle = {
        width: '100%',
        padding: '10px',
        background: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
    };
 
    return (
        <div className="registration-form" style={{ maxWidth: '600px', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2>Registration Form</h2>
            <ToastContainer />
            <Formik
                initialValues={accountType === 'user' ? initialUserValues : initialRefugeeValues}
                validationSchema={accountType === 'user' ? userValidationSchema : refugeeValidationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <div className="form-section">
                            <label>
                                <Field type="radio" name="accountType" value="user" onChange={() => setAccountType('user')} checked={accountType === 'user'} />
                                User
                            </label>
                            <label>
                                <Field type="radio" name="accountType" value="refugee" onChange={() => setAccountType('refugee')} checked={accountType === 'refugee'} />
                                Refugee
                            </label>
                        </div>
 
                        {/* Shared Fields */}
                        <div className="form-section">
                            <Field name="username" placeholder="Username" style={inputStyle} />
                            <ErrorMessage name="username">
                              {msg => <div style={errorStyle}>{msg}</div>}
                            </ErrorMessage>
                            <Field name="password" type="password" placeholder="Password" style={inputStyle} />
                            <ErrorMessage name="password">
                              {msg => <div style={errorStyle}>{msg}</div>}
                            </ErrorMessage>
                            <Field name="email" placeholder="Email" style={inputStyle} />
                            <ErrorMessage name="email">
                              {msg => <div style={errorStyle}>{msg}</div>}
                            </ErrorMessage>
                        </div>
 
                        {/* User Specific Fields */}
                        {accountType === 'user' && (
                            <div className="form-section">
                                <Field name="contact_no" placeholder="Contact Number" style={inputStyle} />
                                <ErrorMessage name="contact_no">
                                  {msg => <div style={errorStyle}>{msg}</div>}
                                </ErrorMessage>
                            </div>
                        )}
 
                        {/* Refugee Specific Fields */}
                        {accountType === 'refugee' && (
                            <>
                                <div className="form-section">
                                    <Field name="name" placeholder="Full Name" style={inputStyle} />
                                    <ErrorMessage name="name">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="ethnicity" placeholder="Ethnicity" style={inputStyle} />
                                    <ErrorMessage name="ethnicity">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="religion" placeholder="Religion" style={inputStyle} />
                                    <ErrorMessage name="religion">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="language" placeholder="Language" style={inputStyle} />
                                    <ErrorMessage name="language">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-section">
                                    <Field name="health" placeholder="Health Condition" style={inputStyle} />
                                    <ErrorMessage name="health">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="education" placeholder="Education" style={inputStyle} />
                                    <ErrorMessage name="education">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="occupation" placeholder="Occupation" style={inputStyle} />
                                    <ErrorMessage name="occupation">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="family_status" placeholder="Family Status" style={inputStyle} />
                                    <ErrorMessage name="family_status">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field type="checkbox" name="has_dependents" style={inputStyle} />
                                    <ErrorMessage name="has_dependents">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-section">
                                    <Field name="previous_location" placeholder="Previous Location" style={inputStyle} />
                                    <ErrorMessage name="previous_location">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="current_location" placeholder="Current Location" style={inputStyle} />
                                    <ErrorMessage name="current_location">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="legal_status" placeholder="Legal Status" style={inputStyle} />
                                    <ErrorMessage name="legal_status">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-section">
                                    <Field name="assistance_needed" placeholder="Assistance Needed" style={inputStyle} />
                                    <ErrorMessage name="assistance_needed">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="age" placeholder="Age" style={inputStyle} />
                                    <ErrorMessage name="age">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="nationality" placeholder="Nationality" style={inputStyle} />
                                    <ErrorMessage name="nationality">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="gender" placeholder="Gender" style={inputStyle} />
                                    <ErrorMessage name="gender">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="dob" type="date" style={inputStyle} />
                                    <ErrorMessage name="dob">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-section">
                                    <Field name="address" placeholder="Address" style={inputStyle} />
                                    <ErrorMessage name="address">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="phone_no" placeholder="Phone Number" style={inputStyle} />
                                    <ErrorMessage name="phone_no">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="blood_type" placeholder="Blood Type" style={inputStyle} />
                                    <ErrorMessage name="blood_type">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="height" placeholder="Height" style={inputStyle} />
                                    <ErrorMessage name="height">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                    <Field name="weight" placeholder="Weight" style={inputStyle} />
                                    <ErrorMessage name="weight">
                                      {msg => <div style={errorStyle}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                            </>
                        )}
 
                        <button type="submit" style={submitButtonStyle}>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
 
export default RegistrationForm;