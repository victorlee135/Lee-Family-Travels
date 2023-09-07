import { useMemo } from "react";
import Image from 'next/image';
import { ITrip, getNameString } from "~/lib/utils";
import styles from './style.module.css';

export interface Props {
    trip: ITrip;
    setOpen: Function;
    mapRef: undefined;
}

const TripStartLocation = ({trip, setOpen, mapRef}) => {
    const name = useMemo(() => getNameString(trip.author), [trip.author]);

    const startCoordinates = trip.markers[0].coordinates;

    const onClick = () => {
        if (screen.width <= 438) {
          setOpen(false);
        }
        mapRef.flyTo(startCoordinates, 10);
    };

    return (
        <div className={styles.listings}>
          <div className={styles.marker} onClick={onClick}>
            <Image
              src={`/images/markers/sticker-image.svg`}
              alt="Marker"
              title="Go to pin"
              width={70}
              height={70}
              objectFit="scale-down"
            />
          </div>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              <span className={styles.title} onClick={onClick} title="Go to pin">
                {trip.tripName}
              </span>
            </p>
            <p className={styles.paragraph2}>
              <span className={styles.authors}>
                {trip.author}
              </span>
            </p>
          </div>
        </div>
      );
};

export default TripStartLocation;
