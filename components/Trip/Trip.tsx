// Represents a single trip within the TripList.
// Contains trip details, such as the trip name, date, or destination.
// Communicates with the Map Component to display trip-specific markers and arrows.
import L, { DivIcon, Icon, IconOptions, LatLngExpression } from 'leaflet';
import { Marker, Polyline, Popup } from 'react-leaflet';
import { IPin, getFullDateString, getNameString, getRandomColor, getRelativeTimeString } from '../../lib';
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


  export const createIcon = function (color) {
    return L.divIcon({
        html: `<div style="background-color: ${color}; border-radius: 50%; width: 9px; height: 9px;"></div>`,
        className: 'custom-icon',
        iconSize: L.point(30, 30, true),
        iconAnchor: [0, 0]
    });
  };


const Trip = ({markers, mapRef, color}) => {
    console.log("Color ", color);
    console.log(markers);
    const coordinates: LatLngExpression[] = markers.map((marker) => marker.coordinates);
    const icon = createIcon(color);

    const markerRefs = useRef([]); // Create refs to track marker elements


    const goToNextMarker = (index) => {
        const newIndex = (index + 1) % markers.length;
        clickMarker(newIndex);
    };
    
    const goToPreviousMarker = (index) => {
        const newIndex = (index - 1 + markers.length) % markers.length;
        clickMarker(newIndex);
    };
    
    const flyToMarker = (index) => {
        mapRef.flyTo(coordinates[index], 10, {
            animate: true,
            duration: 1.25
        });
    };

    const clickMarker = (index) => {
        const marker = markerRefs.current[index];
        console.log("Going to marker: ", marker);
        if (marker) {
            flyToMarker(index);
            // Add a delay (e.g., 500 milliseconds) before firing the click event
            setTimeout(() => {
                marker.fire('click');
            }, 1300);
        }
    };

    return (
        <>
            {/* Render PhotoMarkers */}
            {markers.map((marker, index) => (
               <Marker 
                    key={index}
                    icon={icon} 
                    position={marker.coordinates} 
                    title={`${marker.author} at ${marker.city}`}
                    ref={(ref) => (markerRefs.current[index] = ref)}
                >
                    <Popup autoClose={true}>
                        <div>
                            <div className={styles.text}>
                                <h1>
                                {marker.city},<br /> {marker.country}
                                </h1>
                                <span className={styles.light}>
                                    <i className="bi bi-calendar"></i> {getFullDateString(marker.date)} (
                                    {getRelativeTimeString(marker.date)})
                                </span>
                                <br />
                                <span><i className="bi bi-person-fill"></i> {marker.author}</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span><i className="bi bi-people-fill"></i> others </span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className={styles.button} onClick={() => goToPreviousMarker(index)}>Prev</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className={styles.button}onClick={() => goToNextMarker(index)}>Next</button>
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
                    key={color}
                    positions={coordinates} 
                    color={color} /* Change the color to royal blue */
                    weight={2} /* Increase the line weight */
                    fillOpacity={5} /* Add some transparency */
                    pathOptions={{
                        dashArray: '5, 5',
                        lineCap: 'round', /* Rounded line ends */
                        lineJoin: 'round', /* Rounded line joints */
                    }}
                />
            )}
        </>
    );
};

export default Trip;