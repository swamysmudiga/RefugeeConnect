import React from 'react';
import { Link } from 'react-router-dom';

const MedicalClinic = ({ doctors = [], nurses = [], patients = [], appointments = [], services = [], phoneNumber = "", emailAddress = "" }) => {

  return (
    <div className="max-w-xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Medical Clinic Details</h2>
      <section>
        <h3 className="text-xl font-bold mb-2">Doctors</h3>
        <ul className="list-disc pl-4 mb-4">
          {doctors.map((doctor, index) => (
            <li key={index}>{doctor.name} - {doctor.specialization}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="text-xl font-bold mb-2">Nurses</h3>
        <ul className="list-disc pl-4 mb-4">
          {nurses.map((nurse, index) => (
            <li key={index}>{nurse.name} - {nurse.workExperience} years of experience</li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="text-xl font-bold mb-2">Patients</h3>
        <ul className="list-disc pl-4 mb-4">
          {patients.map((patient, index) => (
            <li key={index}>{patient.name} - {patient.age} years old, {patient.gender}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="text-xl font-bold mb-2">Appointments</h3>
        <ul className="list-disc pl-4 mb-4">
          {appointments.map((appointment, index) => (
            <li key={index}>{appointment.dateTime} - Dr. {appointment.doctor.name} for {appointment.patient.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="text-xl font-bold mb-2">Services</h3>
        <ul className="list-disc pl-4 mb-4">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </section>
      <p className="mb-2"><strong>Phone Number:</strong> {phoneNumber}</p>
      <p className="mb-4"><strong>Email Address:</strong> {emailAddress}</p>
      <Link to=".."><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Back
      </button></Link>
    </div>
  );
};

export default MedicalClinic;
