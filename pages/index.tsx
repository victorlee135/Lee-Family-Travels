import React, { useEffect, useState } from 'react';
import { Lee, getRandomColor, specialTrips } from '~/lib/utils';
import App from '~/components/App/App';

export default function Home() {
  const [jsonTrips, setTrips] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/trips/markers')
      .then((response) => response.json())
      .then((data) => {
        setTrips(data.tripData);
        console.log("Called API");
      })
      .catch((error) => {
        console.error('Error fetching trips:', error);
      });
  }, []); // useEffect with empty array ensures code inside only runs once

  if (jsonTrips.length === 0) {
    return null;
  }
  
  const trips = jsonTrips.map((tripData) => ({
      id: tripData.id.toString(),
      name: tripData.name,
      author: tripData.author,
      lee: tripData.lee,
      start_date: tripData.start_date,
      end_date: tripData.end_date,
      markers: tripData.markers.map((marker) => ({
          author: marker.author[0],
          city: marker.city,
          state: marker.state || '',
          province: marker.province || '',
          country: marker.country,
          coordinates: marker.coordinates
            .replace('(', '')
            .replace(')', '')
            .split(',')
            .map((coord) => parseFloat(coord.trim())),
          date: marker.date,
          photo: marker.photoUrl,
          lee: marker.lee,
          streetview: marker.streetview || '',
          isOpen: marker.isOpen || false,
          wayPoint: marker.waypoint || false
      })),
      google_photos: tripData.google_photos
    })
  );
  
  const tripColors = [];
  for (let i = 0; i < trips.length; i++) {
    if (specialTrips.has(trips[i].id)) {
      tripColors.push(specialTrips.get(trips[i].id));
    } else {
      tripColors.push(getRandomColor());
    }
  }
    
  return (
    <div>
      <App trips={trips} tripColors={tripColors}></App>
    </div>
  );
}