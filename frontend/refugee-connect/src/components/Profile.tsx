import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define interface for user profile data
interface UserProfileData {
    name: string;
    username: string;
    email: string;
    role: string;
    // Add other fields as needed
    age?: number;
    nationality?: string;
    gender?: string;
    dob?: string;
    address?: string;
    phone_no?: string;
    blood_type?: string;
    height?: number;
    weight?: number;
    image?: string;
    occupation?: string;
    family_status?: string;
    previous_location?: string;
    current_location?: string;
    ethnicity?: string;
    religion?: string;
    language?: string;
    health?: string;
    education?: string;
    legal_status?: string;
    assistance_needed?: string;
}

const ProfilePage = () => {
    const [userData, setUserData] = useState<UserProfileData | null>(null); // Specify UserProfileData as the type of userData
    const role = localStorage.getItem('role');
    const personId = localStorage.getItem('personId');

    useEffect(() => {
        // Fetch user profile data based on the role
        const fetchData = async () => {
            try {
                let userProfile;
                switch (role) {
                    case 'refugee':
                        userProfile = await axios.get(`http://localhost:4000/refugee/${personId}`);
                        break;
                    case 'user':
                        userProfile = await axios.get(`http://localhost:4000/user/${personId}`);
                        break;
                }
                const response = userProfile;
                console.log("Response data:", response?.data);
                setUserData(response?.data[0]);
                console.log('User Data:', userData);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchData();
    }, [role]);

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '110px' }}>
            <div style={{ width: '80%', display: 'flex', alignItems: 'center', marginTop: '50px' }}>
                {userData && (
                    <div style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '50px' }}>
                        <img src={`http://localhost:4000/${userData.image}`} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '8px', marginBottom: '20px' }} />
                        <button style={{ width: '20%', padding: '10px', backgroundColor: '#007bff', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                    </div>

                )}
                {userData && (
                    <div style={{ width: '60%' }}>
                        <h1 style={{marginBottom: '40px'}}>Profile Information</h1>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                            <li style={{ marginBottom: '10px' }}>
                                <strong>Username:</strong> {userData.username}
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                <strong>Name:</strong> {userData.name}
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                <strong>Email:</strong> {userData.email}
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                <strong>Phone Number:</strong> {userData.phone_no}
                            </li>
                            {role === 'refugee' && (
                                <>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Age:</strong> {userData.age}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Nationality:</strong> {userData.nationality}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Gender:</strong> {userData.gender}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Date of Birth:</strong> {userData.dob}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Address:</strong> {userData.address}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Blood Type:</strong> {userData.blood_type}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Height:</strong> {userData.height}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Weight:</strong> {userData.weight}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Current Location:</strong> {userData.current_location}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Ethnicity:</strong> {userData.ethnicity}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Religion:</strong> {userData.religion}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Language:</strong> {userData.language}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Health:</strong> {userData.health}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Education:</strong> {userData.education}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Legal Status:</strong> {userData.legal_status}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Assistance Needed:</strong> {userData.assistance_needed}
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;