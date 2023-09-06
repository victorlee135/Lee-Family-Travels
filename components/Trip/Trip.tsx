// Represents a single trip within the TripList.
// Contains trip details, such as the trip name, date, or destination.
// Communicates with the Map Component to display trip-specific markers and arrows.
import { LatLngExpression } from 'leaflet';
import { Polyline } from 'react-leaflet';
import { IPin } from '../../lib';
import PhotoMarker from '../PhotoMarker';



export default function Trip({ markers }: { markers: IPin[] }) {
    const coordinates: LatLngExpression[] = markers.map((marker) => marker.coordinates);

    return (
        <>
            {/* Render PhotoMarkers */}
            {markers.map((marker, index) => (
                <PhotoMarker 
                    key={index}
                    type={marker.type}
                    coordinates={marker.coordinates}
                    city={marker.city}
                    country={marker.country}
                    author={marker.author}
                    photo={marker.photo}
                    date={marker.date}
                />
            ))}

            {/* Connect markers with arrows */}
            {coordinates.length > 1 && (
                <Polyline 
                    positions={coordinates} 
                    color="blue" 
                />
            )}
        </>
    );
  };