import React, { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';

import styled from 'styled-components';
import axios from 'axios';
import MapComponent from '../Map/Map';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to bottom, #fff, #e0e0e0, #333); /* Gradient background */
  padding: 20px;
`;

const Overlay = styled.div`
  background: linear-gradient(rgba(255,255,255,0.6), rgba(224,224,224,0.6), rgba(51,51,51,0.6)); /* Overlay to enhance readability */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const PageContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative; /* Added position relative for overlay */
  z-index: 1; /* Ensure content appears above the overlay */
  gap: 20px; /* Added gap between the two sections */
`;


const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 50%; /* Changed width to 50% */
`;

const CardHeader = styled.div`
  background-color: #007bff;
  padding: 24px;
  color: #fff;
  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
  }
`;

const CardBody = styled.div`
  padding: 32px;
`;

const Attribute = styled.div`
  margin-bottom: 20px;
  label {
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
    display: block;
  }
  span {
    color: #333;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #f5f5f5;
`;

const MapContainer = styled.div`
  background-color: #8b4513; /* Changed background color to reddish brown */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 50%; /* Changed width to 50% */
`;

const MapHeader = styled.div`
  background-color: #8b4513; /* Changed background color to reddish brown */
  padding: 24px;
  color: #fff;
  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
  }
`;

const MapContent = styled.div`
  padding: 20px;
`;

const ResourceDetailPage: React.FC = () => {
  const [camp, setCamp] = useState<any>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResource = async () => {
      try {
        console.log(`http://localhost:4000/camp/${id}`);

        const response = await axios.get(`http://localhost:4000/camp/${id}`);
        setCamp(response.data);
        console.log("Camp data " ,response.data);
      } catch (error) {
        console.error('Error fetching resource:', error);
      }
    };

    fetchResource();
  }, [id]);
 console.log(" camp is ", camp)
  // Function to handle back button click
  const handleBack = () => {
    // Add your navigation logic here to go back to the previous page
  };

  return (
    <PageContainer>
      <Overlay /> {/* Overlay for background gradient */}
      {camp ? (
        <PageContent>
          <CardContainer>
            <CardHeader>
              <h2>Camp Detail</h2>
            </CardHeader>
            <CardBody>
              <Attribute>
                <label>Name:</label>
                <span>{camp.campName}</span>
              </Attribute>
              <Attribute>
                <label>Capacity:</label>
                <span>{camp.campCapacity}</span>
              </Attribute>
              <Attribute>
                <label>Location:</label>
                <span>{camp.campLocation}</span>
              </Attribute>
              <Attribute>
                <label>Current Occupancy:</label>
                <span>{camp.campCurrentOccupancy}</span>
              </Attribute>
              <Attribute>
                <label>Management Name:</label>
                <span>{camp.campManagementName}</span>
              </Attribute>
              <Attribute>
                <label>Security Level:</label>
                <span>{camp.campSecurityLevel}</span>
              </Attribute>
              <Attribute>
                <label>Infrastructure:</label>
                <span>{camp.Infrastructure}</span>
              </Attribute>
              <Attribute>
                <label>Person ID:</label>
                <span>{camp.personId}</span>
              </Attribute>
              <Attribute>
                <label>Donation ID:</label>
                <span>{camp.donationId}</span>
              </Attribute>
              <Attribute>
                <label>Donation Amount:</label>
                <span>{camp.donationAmount}</span>
              </Attribute>
            </CardBody>
            <CardFooter>
              {/* Back button */}
              <button onClick={handleBack}>Back</button>
              {/* Edit and delete buttons */}
              <div>
                <button>Edit</button>
                <span style={{ marginRight: '10px' }}></span>
                <button>Delete</button>
              </div>
            </CardFooter>
          </CardContainer>
          <MapContainer>
            <MapHeader>
              <h2>See the location</h2>
            </MapHeader>
            <MapContent>
            <MapComponent location={camp.campLocation}/>
            </MapContent>
          </MapContainer>
        </PageContent>
      ) : (
        <div>Loading...</div>
      )}
    </PageContainer>
  );
};

export default ResourceDetailPage;
