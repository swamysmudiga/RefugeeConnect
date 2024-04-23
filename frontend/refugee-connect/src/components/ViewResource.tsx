import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import MapComponent from './Map/Map';
import { updateResourceAsync , removeResourceAsync} from '../store/resource/resource-reducer-actions'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface Resource {
  id: string;
  name: string;
  description: string;
  contentType: string;
  createdDate: string;
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
  margin-top: 50px; /* Add top margin */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 48%; /* Adjusted width for better alignment */
`;
 
const CardHeader = styled.div`
  background-color: #007bff;
  padding: 24px;
  color: #fff;
  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
`;
 
const CardBody = styled.div`
  padding: 32px;
`;
 
const AttributeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
 
const Attribute = styled.div<{ disabled?: boolean }>`
  width: 50%; /* Displaying attributes side by side */
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
  input {
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 4px;
    width: calc(100% - 16px); /* Adjusted width for input */
    ${props => props.disabled && `
      background-color: #f5f5f5;
      cursor: not-allowed;
    `}
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
  margin-top: 50px; /* Add top margin */
  background-color: #fff; /* Set background color to white */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 48%; /* Adjusted width for better alignment */
  height: 675px;
`;
 
const MapHeader = styled.div`
  background-color: #8b4513; /* Changed background color to reddish brown */
  padding: 24px;
  color: #fff;
  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
`;
 
const MapContent = styled.div`
  padding: 20px;
`;
 
const Image = styled.img`
  max-width: 100%; /* Ensures image is not wider than its container */
  max-height: 200px; /* Set a maximum height for the image */
  object-fit: cover; /* Ensures the aspect ratio is preserved */
  width: auto; /* Ensures image maintains original width unless it exceeds max-width */
  height: auto; /* Ensures image maintains original height unless it exceeds max-height */
  border-radius: 4px; /* Optional: Rounds the corners of the image */
  display: block; /* Ensures the image is treated as a block element */
  margin: 0 auto; /* Centers the image horizontally */
`;
 
const ResourceDetailPage: React.FC = () => {
  const [resource, setResource] = useState<Resource | null>(null);
  const [editMode, setEditMode] = useState(false); // State variable for edit mode
  const { id } = useParams();
  const role = localStorage.getItem('role');
  const personId = localStorage.getItem('personId');
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  useEffect(() => {
    const fetchResource = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/resource/${id}`);
        setResource(response.data[0]);
      } catch (error) {
        console.error('Error fetching resource:', error);
      }
    };
 
    fetchResource();
  }, [id]);
 
  // Function to handle back button click
  const handleSave = async() => {
    console.log("After edit save resource- ",JSON.stringify(resource));
    await dispatch(updateResourceAsync(resource));
    setEditMode(prevMode => !prevMode);

  };
 
  // Function to handle edit mode toggle
  const handleEdit = () => {
    setEditMode(prevMode => !prevMode);
  };

  const deletResource= async() =>{
    console.log("Delete resource- ",JSON.stringify(resource));
    await dispatch(removeResourceAsync(resource?.id));
    navigate('/refugee/viewAllResource')
  }
 
  // Function to handle input change for attributes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResource(prevResource => ({
      ...prevResource!,
      [name]: value,
    }));
  };
 
  return (
    <PageContainer>
      <Overlay /> {/* Overlay for background gradient */}
      {resource ? (
        <PageContent>
          <CardContainer>
            <CardHeader>
              <h2>RESOURCE DETAILS</h2>
            </CardHeader>
            <CardBody>
              <Image src={`http://localhost:4000/${resource.image}`} alt="Resource" />
              <AttributeContainer>
                <Attribute disabled={!editMode}>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={resource.name}
                    disabled={!editMode}
                    onChange={handleInputChange}
                  />
                </Attribute>
                <Attribute disabled={!editMode}>
                  <label>Description:</label>
                  <input
                    type="text"
                    name="description"
                    value={resource.description}
                    disabled={!editMode}
                    onChange={handleInputChange}
                  />
                </Attribute>
                <Attribute disabled={!editMode}>
                  <label>Content Type:</label>
                  <input
                    type="text"
                    name="contentType"
                    value={resource.contentType}
                    disabled={!editMode}
                    onChange={handleInputChange}
                  />
                </Attribute>
                <Attribute disabled={!editMode}>
                  <label>Creation Date:</label>
                  <span>{resource.createdDate}</span>
                </Attribute>
                <Attribute disabled={!editMode}>
                  <label>Location:</label>
                  <input
                    type="text"
                    name="location"
                    value={resource.location}
                    disabled={!editMode}
                    onChange={handleInputChange}
                  />
                </Attribute>
                <Attribute disabled={!editMode}>
                  <label>Availability:</label>

                  <input
                    type="text"
                    name="isAvailable"
                    value={resource.isAvailable ? 'true' : 'false'}
                    disabled={!editMode}
                    onChange={handleInputChange}
                  />
                </Attribute>
              </AttributeContainer>
            </CardBody>
            <CardFooter>
              {editMode ? (
                 (role === 'admin' || personId === resource.userId) && <button onClick={handleSave}>Save</button>
              ) : 
               (role === 'admin' || personId === resource.userId) &&  <button onClick={handleEdit}>Edit</button>
              }
              {/* Back button */}
              <Link to="../viewAllResource"><button>Back</button></Link>
              {/* Edit and delete buttons */}
              <div>
                <span style={{ marginRight: '10px' }}></span>
                { (role === 'admin' || personId === resource.userId) && <button onClick={deletResource}>Delete</button>}
              </div>
            </CardFooter>
          </CardContainer>
          <MapContainer>
            <MapHeader>
              <h2>EXPLORE THE LOCATION</h2>
            </MapHeader>
            <MapContent>
             { !editMode  &&  <MapComponent location={resource.location} />}
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