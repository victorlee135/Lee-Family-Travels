import { useMemo, useState } from "react";
import Image from 'next/image';
import { ITrip, getNameString, getNames } from "~/lib/utils";
import styles from './style.module.css';

export interface Props {
    trip: ITrip;
    isOpen: boolean;
    setOpen: Function;
    mapRef: undefined;
}


const TripDetails = ({trip, isOpen, setOpen, mapRef}) => {
    const name = getNames(trip.lee);
    const markers = trip.markers;

    const citySet = new Set();
    const countrySet = new Set();

    markers.forEach((marker) => {
      citySet.add(marker.city);
      countrySet.add(marker.country);
    });

    const cities = citySet.size;
    const countries = countrySet.size;

    const [showMarkersList, setShowMarkersList] = useState(false);

    // List destinations for specific trip
    const toggleMarkersList = () => {
        if (screen.width <= 438) {
          setOpen(false);
        }
        setShowMarkersList(!showMarkersList)
    };


    // Go to specific destination on map
    const goToMarker = (markerCoordinates) => {
      if (screen.width <= 438) {
        setOpen(false);
      }
      mapRef.flyTo(markerCoordinates, 10)
    }

    return (
        <div className={styles.listings}>
          <div className={styles.marker} onClick={toggleMarkersList}>
            <Image
              src={`/markers/victorIcon.jpeg`}
              alt="Marker"
              title="Go to pin"
              width={65}
              height={63}
              objectFit="cover"
            />
          </div>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              <span className={styles.title} onClick={toggleMarkersList} title="Go to pin">
                {trip.tripName}
              </span>
            </p>
            <p className={styles.paragraph}>
              <span className={styles.authors}>
                <i className="bi bi-people-fill"></i> {name}
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
                      onClick={() => goToMarker(marker.coordinates)}
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
