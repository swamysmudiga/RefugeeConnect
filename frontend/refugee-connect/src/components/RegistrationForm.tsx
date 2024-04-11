import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define Yup validation schemas for both User and Refugee registration forms
const userValidationSchema = Yup.object({
  username: Yup.string()
    .min(8, "Username should be of at least 8 characters.")
    .max(15, "Username cannot be more than 15 characters.")
    .required('Required'),
  password: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  age: Yup.number().required('Required').positive().integer(),
  email: Yup.string().email('Invalid email').required('Required'),
  contact_no: Yup.number().required('Required').positive().integer(),
});

const refugeeValidationSchema = Yup.object({
  username: Yup.string()
    .min(8, "Username should be of at least 8 characters.")
    .max(15, "Username cannot be more than 15 characters.")
    .required('Required'),
  password: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  ethnicity: Yup.string().required('Required'),
  religion: Yup.string().required('Required'),
  language: Yup.string().required('Required'),
  health: Yup.string().required('Required'),
  education: Yup.string().required('Required'),
  occupation: Yup.string().required('Required'),
  family_status: Yup.string().required('Required'),
  has_dependents: Yup.boolean().required('Required'),
  previous_location: Yup.string().required('Required'),
  current_location: Yup.string().required('Required'),
  legal_status: Yup.string().required('Required'),
  assistance_needed: Yup.string().required('Required'),
  age: Yup.number().required('Required').positive().integer(),
  nationality: Yup.string().required('Required'),
  gender: Yup.string().required('Required'),
  dob: Yup.date().required('Required'),
  address: Yup.string().required('Required'),
  phone_no: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  blood_type: Yup.string().required('Required'),
  height: Yup.number().required('Required').positive(),
  weight: Yup.number().required('Required').positive(),
});

const RegistrationForm = () => {
  const [accountType, setAccountType] = useState('user'); // Default to 'user'

  return (
    <div>
      <h2>Registration Form</h2>
      <ToastContainer />
      <Formik
        initialValues={{
          username: '',
          password: '',
          name: '',
          age: '',
          email: '',
          contact_no: '',
          // Refugee specific fields
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
          nationality: '',
          gender: '',
          dob: '',
          address: '',
          phone_no: '',
          blood_type: '',
          height: '',
          weight: '',
        }}
        validationSchema={accountType === 'user' ? userValidationSchema : refugeeValidationSchema}
        onSubmit={(values, actions) => {
          toast.success("Registration Successful!");
          console.log(values);
          actions.setSubmitting(false);
          // Integrate with your backend API to submit the form
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label>
                <Field type="radio" name="accountType" value="user" onChange={() => setAccountType('user')} checked={accountType === 'user'} />
                User
              </label>
              <label>
                <Field type="radio" name="accountType" value="refugee" onChange={() => setAccountType('refugee')} checked={accountType === 'refugee'} />
                Refugee
              </label>
            </div>

            {/* Common fields */}
            <Field name="username" placeholder="Username" />
            {errors.username && touched.username && <div>{errors.username}</div>}
            <Field name="password" type="password" placeholder="Password" />
            {errors.password && touched.password && <div>{errors.password}</div>}

            {/* User and Refugee common fields */}
            <Field name="name" placeholder="Name" />
            {errors.name && touched.name && <div>{errors.name}</div>}
            <Field name="age" placeholder="Age" />
            {errors.age && touched.age && <div>{errors.age}</div>}
            <Field name="email" placeholder="Email" />
            {errors.email && touched.email && <div>{errors.email}</div>}

            {/* User specific field */}
            {accountType === 'user' && (
              <>
                <Field name="contact_no" placeholder="Contact Number" />
                {errors.contact_no && touched.contact_no && <div>{errors.contact_no}</div>}
              </>
            )}

            {/* Refugee specific fields */}
            {accountType === 'refugee' && (
              <>
                <Field name="ethnicity" placeholder="Ethnicity" />
                <Field name="religion" placeholder="Religion" />
                <Field name="language" placeholder="Language" />
                <Field name="health" placeholder="Health" />
                <Field name="education" placeholder="Education" />
                <Field name="occupation" placeholder="Occupation" />
                <Field name="family_status" placeholder="Family Status" />
                <Field name="has_dependents" type="checkbox" />
                <Field name="previous_location" placeholder="Previous Location" />
                <Field name="current_location" placeholder="Current Location" />
                <Field name="legal_status" placeholder="Legal Status" />
                <Field name="assistance_needed" placeholder="Assistance Needed" />
                <Field name="nationality" placeholder="Nationality" />
                <Field name="gender" placeholder="Gender" />
                <Field name="dob" placeholder="Date of Birth" />
                <Field name="address" placeholder="Address" />
                <Field name="phone_no" placeholder="Phone Number" />
                <Field name="blood_type" placeholder="Blood Type" />
                <Field name="height" placeholder="Height" />
                <Field name="weight" placeholder="Weight" />
              </>
            )}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
