// Represents a single trip within the TripList.
// Contains trip details, such as the trip name, date, or destination.
// Communicates with the Map Component to display trip-specific markers and arrows.
import { LatLngExpression } from 'leaflet';
import { Polyline } from 'react-leaflet';
import { IPin } from '../../lib';
import PhotoMarker from '../PhotoMarker';
import Image from 'next/image';
import { useState } from 'react';


// Things to add
// 1. details of trip (countries, date duration)
// 2. arrows to go to next destination

const Trip = ({markers, mapRef}) => {
    const coordinates: LatLngExpression[] = markers.map((marker) => marker.coordinates);
    const [currentMarkerIndex, setCurrentMarkerIndex] = useState(0);
    
    return (
        <>
            {/* Render PhotoMarkers */}
            {markers.map((marker, index) => (
                <PhotoMarker 
                    key={index}
                    pin={marker}
                />
            ))}

            {/* Connect markers with arrows */}
            {coordinates.length > 1 && (
                <Polyline 
                    positions={coordinates} 
                    color="royalblue" /* Change the color to royal blue */
                    weight={3} /* Increase the line weight */
                    fillOpacity={0.6} /* Add some transparency */
                    pathOptions={{
                        dashArray: '10, 5', /* Adjust the dashArray for a dotted line effect */
                        lineCap: 'round', /* Rounded line ends */
                        lineJoin: 'round', /* Rounded line joints */
                    }}
                />
            )}
        </>
    );
};

export default Trip;