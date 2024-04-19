// MapComponent.js
import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios'; // for making API requests
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import  { Map } from 'mapbox-gl';

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

  const MapComponent = ({ resource }: { resource: Resource }) => { // Specify the prop type
    const [map, setMap] = useState< Map | null>(null); 

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaWFtYWtzaGF5ZGF0aXIxOCIsImEiOiJjbHY2dDN3dzAwMnNxMmtuMDY5anlpaG8yIn0.6EKD6UsjSCuY4YkN1tYWjw';
    const initializeMap = () => {
        const map = new mapboxgl.Map({
          container: 'map-container',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-71.0589, 42.3601], // Default center (Boston coordinates)
          zoom: 14 // Adjust the zoom level
        });
      
        // Add marker to the map
        const geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl
        });
      
        // Geocode the address to get the coordinates
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(resource.location)}.json?access_token=${mapboxgl.accessToken}`)
          .then(response => {
              const coordinates = response.data.features[0].geometry.coordinates;
              const [longitude, latitude] = coordinates; // Extract coordinates in the correct order
          
              // Add marker at the coordinates
              new mapboxgl.Marker({ anchor: 'bottom' })
                  .setLngLat([longitude, latitude]) // Pass coordinates in the correct order
                  .addTo(map);
          
              // Update map center to the marker's location
              map.setCenter([longitude, latitude]);
              console.log("coordinates ", coordinates);
          })
          .catch(error => {
            console.error('Error geocoding address:', error);
          });
      
        setMap(map);
      };

    if (!map) initializeMap();

    // Cleanup
    return () => {
        if (map) {
          map.remove();
        }
    }
  }, [map, resource]);

  return <div id="map-container" style={{ width: '100%', height: '400px' }} />;
};

export default MapComponent;
