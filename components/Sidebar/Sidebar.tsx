import { useMemo, useState } from 'react';
import Image from 'next/image';
import { IPin, ITrip } from '~/lib/utils';
import styles from './style.module.css';
import { CSSTransition } from 'react-transition-group';
import TripDetails from '../TripDetails/TripDetails';

export interface SideBarProps {
    trips: ITrip[];
    isOpen: boolean;
    setOpen: Function;
    mapRef: undefined;
}

  export default function Sidebar({ trips, isOpen, setOpen, mapRef }: SideBarProps) {
    const [isTrips, setTrips] = useState<boolean>(true);
    const [isStats, setStats] = useState<boolean>(false);

    const getButton = (button: string) => {
      if (button === 'trips') {
        return styles.button_active;
      }
      return styles.button;
    }
    
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
                    src="/markers/lee-family-logo-cropped.svg"
                    alt="Lee Logo"
                    width={240}
                    height={80}
                    style={{ cursor: 'pointer'}}
                    priority 
                />
              <br></br>
              <div className={styles.buttons}>
                <div className={styles.tab}>
                  <button
                    className={getButton('trips')}
                    type={'button'}
                    role="button"
                    onClick={() => setTrips((open) => !open)}
                  >
                    {' '}
                    Trips <i className="bi bi-geo-fill"></i>{' '}
                  </button>
                  &nbsp;
                  <button 
                    className={getButton('stats')}
                    type={'button'}
                    role="button"
                    onClick={() => setTrips((open) => !open)}
                  >
                    {' '}
                    Statistics <i className="bi bi-award-fill"></i>{' '}
                  </button>
                  <br></br>
                </div>
              </div>
            </div>
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
                  <TripDetails
                    key={trip.id}
                    isOpen="false"
                    mapRef={mapRef}
                    setOpen="false"
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
