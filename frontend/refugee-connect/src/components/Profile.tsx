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
                switch(role){

                    case 'refugee': userProfile = await axios.get(`http://localhost:4000/refugee/${personId}`); break;
                    case 'user': userProfile = await axios.get(`http://localhost:4000/user/${personId}`);break;
                }
                const response = userProfile;
                console.log(response);
                setUserData(response?.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
 
        fetchData();
    }, [role]);
 
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Profile Page</h1>
            {userData ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2>Profile</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ marginRight: '10px' }}>Username:</p>
                            <p>{userData.username}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ marginRight: '10px' }}>Name:</p>
                            <p>{userData.name}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ marginRight: '10px' }}>Email:</p>
                            <p>{userData.email}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ marginRight: '10px' }}>Phone Number:</p>
                            <p>{userData.phone_no}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ marginRight: '10px' }}>Image:</p>
                            <img src={userData.image} alt="Profile" />
                        </div>
                        {/* Render additional fields based on role */}
                        {role === 'user' && (
                            <div>
                            </div>
                        )}
                        {role === 'refugee' && (
                            <div style={{ width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Age:</p>
                                    <p>{userData.age}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Nationality:</p>
                                    <p>{userData.nationality}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Gender:</p>
                                    <p>{userData.gender}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Date of Birth:</p>
                                    <p>{userData.dob}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Address:</p>
                                    <p>{userData.address}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Blood Type:</p>
                                    <p>{userData.blood_type}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Height:</p>
                                    <p>{userData.height}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Weight:</p>
                                    <p>{userData.weight}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Current Location:</p>
                                    <p>{userData.current_location}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Ethnicity:</p>
                                    <p>{userData.ethnicity}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Religion:</p>
                                    <p>{userData.religion}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Language:</p>
                                    <p>{userData.language}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Health:</p>
                                    <p>{userData.health}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Education:</p>
                                    <p>{userData.education}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Legal Status:</p>
                                    <p>{userData.legal_status}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ marginRight: '10px' }}>Assistance Needed:</p>
                                    <p>{userData.assistance_needed}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
 
export default ProfilePage;