// Represents a single trip within the TripList.
// Contains trip details, such as the trip name, date, or destination.
// Communicates with the Map Component to display trip-specific markers and arrows.
import L, { LatLngExpression } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { getCountryOrState, getFullDateString, getRelativeTimeString } from '../../lib';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { renderToStaticMarkup } from 'react-dom/server';
import { faLocationDot, faMapPin } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import { useRef } from 'react';
import styles from './style.module.css';


const Trip = ({tripId, tripName, markers, mapRef, color, selectedTripIndex, setSelectedTripIndex}) => {
    const coordinates: LatLngExpression[] = markers.map((marker) => marker.coordinates);
    const markerRefs = useRef([]);

    const customMarkerIcon = L.divIcon({
        html: renderToStaticMarkup(
            <FontAwesomeIcon icon={faMapPin} size='xl' style={{ color: color }}/>),
        className: 'custom-icon',
        iconAnchor: [6, 16]
    });

    const goToNextMarker = (index) => {
        const newIndex = (index + 1) % markers.length;
        openMarker(newIndex);
    };
    
    const goToPreviousMarker = (index) => {
        const newIndex = (index - 1 + markers.length) % markers.length;
        openMarker(newIndex);
    };

    const selectTrip = () => {
        if (selectedTripIndex !== tripId) {
            setSelectedTripIndex(tripId);
        }
        
    }
    
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

    return (
        <>
            {/* Render PhotoMarkers */}
            {markers.map((marker, index) => (
               <Marker 
                    key={index}
                    icon={customMarkerIcon} 
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

        </>
    );
};

export default Trip;