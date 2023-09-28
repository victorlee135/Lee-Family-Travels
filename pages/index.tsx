import React, { useEffect, useState } from 'react';
import { Lee, getRandomColor, specialTrips } from '~/lib/utils';
import App from '~/components/App/App';
import { parseDBTripsResponse } from '~/lib/aws_utils';
import axios from 'axios'; 

export default function Home() {
  const [jsonTrips, setJsonTrips] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/api/trips/markers')
      .then((response) => {
        setJsonTrips(response.data.tripData);
        console.log("Called API");
      })
      .catch((error) => {
        console.error('Error fetching trips:', error);
      });
  }, []);

  if (jsonTrips.length === 0) {
    return null;
  }
  const trips = parseDBTripsResponse(jsonTrips);
  
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