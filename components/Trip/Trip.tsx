// Represents a single trip within the TripList.
// Contains trip details, such as the trip name, date, or destination.
// Communicates with the Map Component to display trip-specific markers and arrows.
import { Icon, LatLngExpression } from 'leaflet';
import { Marker, Polyline, Popup } from 'react-leaflet';
import { IPin, getFullDateString, getNameString, getRelativeTimeString } from '../../lib';
import PhotoMarker from '../PhotoMarker';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './style.module.css';


// Things to add
// 1. details of trip (countries, date duration)
// 2. arrows to go to next destination

export const getIcon: Icon = new Icon({
    iconUrl: `/markers/sticker.svg`,
    iconSize: [30, 30]
  })


const Trip = ({markers, mapRef}) => {
    const coordinates: LatLngExpression[] = markers.map((marker) => marker.coordinates);
    const icon = getIcon;


    const goToNextMarker = (index) => {
        const newIndex = (index + 1) % markers.length;
        flyToMarker(newIndex);
    };
    
    const goToPreviousMarker = (index) => {
        const newIndex = (index - 1 + markers.length) % markers.length;
        flyToMarker(newIndex);
    };
    
    const flyToMarker = (index) => {
        mapRef.flyTo(coordinates[index], 11, {
            animate: true,
            duration: 1.25
        });
        mapRef.closePopup();
    };

    return (
        <>
            {/* Render PhotoMarkers */}
            {markers.map((marker, index) => (
               <Marker 
                    icon={icon} 
                    position={marker.coordinates} 
                    title={`${marker.author} at ${marker.city}`}
                    
                >
                    <Popup autoClose={true}>
                        <div>
                            <div className={styles.text}>
                                <h1>
                                {marker.city},<br /> {marker.country}
                                </h1>
                                {marker.date && (
                                <i>
                                    {getFullDateString(marker.date)} ({getRelativeTimeString(marker.date)})
                                </i>
                                )}
                                <br />
                                <span>{marker.author}</span>
                                <br />
                                <button onClick={() => goToPreviousMarker(index)}>Previous</button>
                                <button onClick={() => goToNextMarker(index)}>Next</button>
                            </div>
                            <Image
                                alt={`${marker.author} at ${marker.city}`}
                                src={marker.photo}
                                fill
                                className={styles.image}
                            />
                        </div>
                    </Popup>
               </Marker>
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