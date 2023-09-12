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

export default function Trip({ markers }: { markers: IPin[] }) {
    const coordinates: LatLngExpression[] = markers.map((marker) => marker.coordinates);
    
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
                    color="black" 
                    pathOptions={{
                        dashArray: '4, 4',
                    }}
                />
            )}
        </>
    );
  };