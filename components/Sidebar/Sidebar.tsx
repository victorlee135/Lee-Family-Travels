import { useMemo, useState } from 'react';
import Image from 'next/image';
import { IPin, ITrip } from '~/lib/utils';
import styles from './style.module.css';
import { CSSTransition } from 'react-transition-group';
import TripStartLocation from '../TripStartLocation/TripStartLocation';

export interface SideBarProps {
    trips: ITrip[];
    isOpen: boolean;
    setOpen: Function;
    mapRef: undefined;
}

  export default function Sidebar({ trips, isOpen, setOpen, mapRef }: SideBarProps) {
  
    return (
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames={{
          enter: styles.slide_enter,
          enterActive: styles.slide_enter_active,
          exit: styles.slide_exit,
          exitActive: styles.slide_exit_active
        }}
        unmountOnExit
      >
        <div className={styles.sidebar}>
          <div className={styles.content}>
            <div className={styles.heading}>
                <Image
                    src="/markers/sticker-image.svg"
                    alt="Lee Logo"
                    width={180}
                    height={61}
                    style={{ cursor: 'pointer'}}
                    priority 
                />
              <br></br>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <CSSTransition
              in={trips}
              timeout={250}
              classNames={{
                enter: styles.locations_enter,
                enterActive: styles.locations_enter_active,
                exit: styles.locations_exit,
                exitActive: styles.locations_exit_active
              }}
              unmountOnExit
            >
              <div>
                {trips.map((trip: ITrip) => (
                  <TripStartLocation
                    key={trip.id}
                    mapRef={mapRef}
                    setOpen={setOpen}
                    trip={trip}
                  />
                ))}
              </div>
            </CSSTransition>
          </div>
        </div>
      </CSSTransition>
    );
  }
