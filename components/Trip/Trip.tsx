import L, { LatLngExpression } from 'leaflet';
import { Marker, Popup, Polyline } from 'react-leaflet';
import { IPin, getCountryOrState, getFullDateString, getRelativeTimeString } from '../../lib';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { renderToStaticMarkup } from 'react-dom/server';
import { faLocationDot, faMapPin, faFlagCheckered, faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import axios from 'axios'; 
import Photo from '../Photo/Photo';

export interface TripProps {
    tripId: string;
    tripName: string;
    inputMarkers: IPin[];
    mapRef: any;
    color: string;
    selectedTripIndex: string;
    setSelectedTripIndex: Function;
  }


export default function Trip({tripId, tripName, inputMarkers, mapRef, color, selectedTripIndex, setSelectedTripIndex} : TripProps) {
    const isSelected = tripId === selectedTripIndex;
    const markers = []
    const coordinates: LatLngExpression[] = []
    const polyCoordinates: LatLngExpression[] = []
    const markerRefs = useRef([]);
    
    for (let i = 0; i < inputMarkers.length; i++) {
        if (!inputMarkers[i].wayPoint) {
            markers.push(inputMarkers[i]);
            coordinates.push(inputMarkers[i].coordinates);
        }
        polyCoordinates.push(inputMarkers[i].coordinates);
    }
   
    
    const isSingleEvent = markers.length === 1;


    const customMarkerIcon = (index) => {
        let icon = faMapPin;
        let x = 6;
        let y = 16;
        if (isSingleEvent) {
            icon = faCameraRetro;
        }   
        else if (index === 0) {
            icon = faLocationDot;
        } else if (index === markers.length - 1) {
            icon = faFlagCheckered;
            x = 2;
            y = 18;
        }
        return L.divIcon({
            html: renderToStaticMarkup(
                <FontAwesomeIcon icon={icon} size='lg' style={{ color: color }}/>),
            className: 'custom-icon',
            iconAnchor: [x, y]
        });
    };

    const createPolyline = () => {
        
        if (polyCoordinates.length < 2) {
            return null;
        }
        
          if (isSelected) {
            return <Polyline key={"h" + color} positions={polyCoordinates}
                color={color} weight={3.5} fillOpacity={5} />;
          } else {  
            return <Polyline key={"d" + color} positions={polyCoordinates}
                color={color} weight={2.25} fillOpacity={5}
                pathOptions={{ dashArray: [5, 5], lineCap: 'round', lineJoin: 'round',}} />;
          }
    };
        

    const goToNextMarker = (index) => {
        const newIndex = (index + 1) % markers.length;
        openMarker(newIndex);
    };
    
    const goToPreviousMarker = (index) => {
        const newIndex = (index - 1 + markers.length) % markers.length;
        openMarker(newIndex);
    };
    
    const flyToMarker = (index) => {
        const currentZoom = mapRef.getZoom();
        mapRef.flyTo(coordinates[index], currentZoom, {
            animate: true,
            duration: 0.75
        });
    };

    const openMarker = (index) => {
        const marker = markerRefs.current[index];
        if (marker) {
            flyToMarker(index);
            setTimeout(() => {
                marker.fire('click');
            }, 800);
        }
    };

    const selectTrip = () => {
        const newSelectedTripIndex = tripId;
        setSelectedTripIndex(newSelectedTripIndex);
    }

    return (
        <>
            {/* Render PhotoMarkers */}
            {markers.map((marker, index) => (
                <Marker 
                    key={index}
                    icon={customMarkerIcon(index)} 
                    position={marker.coordinates} 
                    title={`${marker.author} at ${marker.city}`}
                    ref={(ref) => (markerRefs.current[index] = ref)}
                    eventHandlers={{
                        click: () => {selectTrip()},
                    }}
                >
                    <Popup autoClose={true}>
                        <div>
                            <div className={styles.text}>
                                <h1 className={styles.h1}>
                                    {marker.city}, {getCountryOrState(marker)}
                                </h1>
                                <span className={styles.test}>
                                    <i className="bi bi-info-circle"></i> {tripName}
                                </span>
                                <br />
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
                                {!isSingleEvent && (
                                    <>
                                        <button className={styles.button} onClick={() => goToPreviousMarker(index)}>Prev</button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button className={styles.button}onClick={() => goToNextMarker(index)}>Next</button>
                                    </>
                                )}
                                
                            </div>
                            <Photo marker={marker} isSelected={isSelected}/>
                        </div>
                    </Popup>
            </Marker>
            ))}
            {createPolyline()}
        </>
    );
};

// Photo component
// call s3 API
// state variables: isAPICalled