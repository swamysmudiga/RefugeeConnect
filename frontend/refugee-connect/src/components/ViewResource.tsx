import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams , Link } from 'react-router-dom';
import MapComponent from './Map/Map';


interface Resource {
  id: string;
  name: string;
  description: string;
  contentType: string;
  creationDate: string;
  location: string;
  isAvailable: boolean;
  image: string;
  userId: string;
  _id: string;
  __v: number;
}

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
`;

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 45%;
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
  width: 45%;
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
  const [resource, setResource] = useState<Resource | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResource = async () => {
      try {
        console.log(`http://localhost:4000/resource/${id}`);

        const response = await axios.get(`http://localhost:4000/resource/${id}`);
        setResource(response.data[0]);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching resource:', error);
      }
    };

    fetchResource();
  }, [id]);


  console.log("from resource view ",resource);
  // Function to handle back button click
  const handleBack = () => {
    // Add your navigation logic here to go back to the previous page
  };

  return (
    <PageContainer>
      <Overlay /> {/* Overlay for background gradient */}
      {resource ? (
        <PageContent>
          <CardContainer>
            <CardHeader>
              <h2>Resource Detail</h2>
            </CardHeader>
            <CardBody>
              <Attribute>
                <label>Name:</label>
                <span>{resource.name}</span>
              </Attribute>
              <Attribute>
                <label>Description:</label>
                <span>{resource.description}</span>
              </Attribute>
              <Attribute>
                <label>Content Type:</label>
                <span>{resource.contentType}</span>
              </Attribute>
              <Attribute>
                <label>Creation Date:</label>
                <span>{resource.creationDate}</span>
              </Attribute>
              <Attribute>
                <label>Location:</label>
                <span>{resource.location}</span>
              </Attribute>
              <Attribute>
                <label>Availability:</label>
                <span>{resource.isAvailable ? 'Yes' : 'No'}</span>
              </Attribute>
              <Attribute>
                <label>Image:</label>
                <img src={`http://localhost:4000/${resource.image}`} alt="Resource" />
              </Attribute>
            </CardBody>
            <CardFooter>
              {/* Back button */}
              <Link to="../viewAllResource"><button onClick={handleBack}>Back</button></Link>
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
             <MapComponent resource={resource}/>
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
