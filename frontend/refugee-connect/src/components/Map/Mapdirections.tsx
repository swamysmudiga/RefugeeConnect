import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
} from '@react-google-maps/api';
import axios from 'axios';

// Define a consistent default coordinate to avoid invalid lat/lng
const DEFAULT_COORDINATE = { lat: 0, lng: 0 };

const MapComponentView: React.FC = () => {
  const { startingLatitude, startingLongitude, endingLatitude, endingLongitude } =
    useParams<{
      startingLatitude?: string;
      startingLongitude?: string;
      endingLatitude?: string;
      endingLongitude?: string;
    }>();

  const [directions, setDirections] = useState(null);

  // Convert parameters to floats and set default coordinates if parsing fails
  const startLat = parseFloat(startingLatitude || '0');
  const startLng = parseFloat(startingLongitude || '0');
  const endLat = parseFloat(endingLatitude || '0');
  const endLng = parseFloat(endingLongitude || '0');

  useEffect(() => {
    if (startLat && startLng && endLat && endLng) {
      fetchDirections();
    }
  }, [startLat, startLng, endLat, endLng]);

  const fetchDirections = async () => {
    try {
      const queryParams = {
        origin: `${startLat},${startLng}`,
        destination: `${endLat},${endLng}`,
        key: 'AIzaSyAX5jyzX1HMhOpJxTb8OXshnyjZrtlYqKY', // Update with your API key
      };

      const response = await axios.get('http://localhost:4000/directions', {
        params: queryParams,
      });

      setDirections(response.data);
    } catch (error) {
      console.error('Error fetching directions:', error);
      setDirections(null); // Fallback in case of error
    }
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMap
        mapContainerStyle={{ height: '100%', width: '100%' }}
        center={{ lat: startLat || DEFAULT_COORDINATE.lat, lng: startLng || DEFAULT_COORDINATE.lng }}
        zoom={8}
      >
        {startLat && startLng && (
          <Marker
            position={{ lat: startLat, lng: startLng }}
            label="Start"
          />
        )}
        {endLat && endLng && (
          <Marker
            position={{ lat: endLat, lng: endLng }}
            label="End"
          />
        )}

        {/* Render DirectionsRenderer only if directions data is available and valid */}
        {directions && (
          <DirectionsRenderer
            options={{ directions: directions, suppressMarkers: false }}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default MapComponentView;
