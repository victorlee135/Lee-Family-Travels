import { useMemo, useState } from "react";
import Image from 'next/image';
import { ITrip, getNameString } from "~/lib/utils";
import styles from './style.module.css';

export interface Props {
    trip: ITrip;
    isOpen: boolean;
    setOpen: Function;
    mapRef: undefined;
}

// 1. change this component to Destinations
// 2. on click go to new page that lists all the destinations of the trip
// 3. clicking destination within trip will go to that marker on map

const TripDetails = ({trip, isOpen, setOpen, mapRef}) => {
    const name = useMemo(() => getNameString(trip.author), [trip.author]);
    const markers = trip.markers;

    const citySet = new Set();
    const countrySet = new Set();

    markers.forEach((marker) => {
      citySet.add(marker.city);
      countrySet.add(marker.country);
    });

    const cities = citySet.size;
    const countries = countrySet.size;


    // State variable to manage whether to show list of markers or not
    const [showMarkersList, setShowMarkersList] = useState(false);

    // List destinations for specific trip
    const onClickTrip = () => {
        if (screen.width <= 438) {
          setOpen(false);
        }
        setShowMarkersList(!showMarkersList)
    };


    // Go to specific destination on map
    const onClickMarker = (markerCoordinates) => {
      if (screen.width <= 438) {
        setOpen(false);
      }
      mapRef.flyTo(markerCoordinates, 10)
    }

    return (
        <div className={styles.listings}>
          <div className={styles.marker} onClick={onClickTrip}>
            <Image
              src={`/markers/redmarker.svg`}
              alt="Marker"
              title="Go to pin"
              width={70}
              height={70}
              objectFit="scale-down"
            />
          </div>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              <span className={styles.title} onClick={onClickTrip} title="Go to pin">
                {trip.tripName}
              </span>
            </p>
            <p className={styles.paragraph}>
              <span className={styles.authors}>
                <i className="bi bi-person-fill"></i> {trip.author}
              </span>
            </p>
            <p className={styles.paragraph}>
              <span className={styles.light}>
                <i className="bi bi-clock"></i> {trip.startDate} - {trip.endDate}
              </span>
            </p>
            <p className={styles.paragraph}>
              <span className={styles.light}>
                <i className="bi bi-airplane-engines"></i> {cities} cities, {countries} countries
              </span>
            </p>
            <p className={styles.paragraph}>
              <span className={styles.authors}>
                <i className="bi bi-google"></i> {trip.googlePhotos}
              </span>
            </p>
              {showMarkersList && (
                <ol className={styles.prettylist}>
                  {markers.map((marker, index) => (
                    <li 
                      key={index}
                      onClick={() => onClickMarker(marker.coordinates)}
                      className={styles.listitem}
                    >
                      {marker.city}, {marker.country}
                    </li>
                  ))}
                </ol>
              )}
              
          </div>
        </div>
      );
};

export default TripDetails;
