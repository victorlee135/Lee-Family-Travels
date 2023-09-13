import { useMemo, useState } from 'react';
import Image from 'next/image';
import { IPin, ITrip, changeVariables } from '~/lib/utils';
import styles from './style.module.css';
import { CSSTransition } from 'react-transition-group';
import TripDetails from '../TripDetails/TripDetails';
import Stats from '../Stats';

export interface SideBarProps {
    trips: ITrip[];
    isOpen: boolean;
    setOpen: Function;
    mapRef: undefined;
}

export enum EFilterKeys {
  Victor = 'Victor',
  Year = 'Year',
}

export default function Sidebar({ trips, isOpen, setOpen, mapRef }: SideBarProps) {
  const [isTrips, setTrips] = useState<boolean>(true);
  const [isStats, setStats] = useState<boolean>(false);

  const getButton = (button: string) => {
    if (button === 'trips') {
      if (isTrips) {
        return styles.button_active;
      }
      return styles.button;
    }
    if (button === 'stats') {
      if (isStats) {
        return styles.button_active;
      }
      return styles.button;
    }
    
  }

  const getName = (name: string) => {
    if (name === 'All') {
      return styles.name_active;
    }
    return styles.name;
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
            <br></br>
            <div className={styles.buttons}>
              <div className={styles.tab}>
                <button
                  className={getButton('trips')}
                  type={'button'}
                  role="button"
                  onClick={() => 
                    changeVariables(true, setTrips, setStats)
                  }
                >
                  {' '}
                  Trips <i className="bi bi-geo-fill"></i>{' '}
                </button>
                &nbsp;
                <button 
                  className={getButton('stats')}
                  type={'button'}
                  role="button"
                  onClick={() => 
                    changeVariables(false, setTrips, setStats)
                  }
                >
                  {' '}
                  Statistics <i className="bi bi-award-fill"></i>{' '}
                </button>
                <br></br>
              </div>
            </div>
          </div>
          <CSSTransition
            in={isTrips}
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
              <div className={styles.sort}>
                <div className={styles.text}>
                  <label>
                    <b>Lee: </b>
                  </label>
                  &nbsp;
                  <button
                      className={getName('All')}
                      type={'button'}
                      role="button"
                      onClick={() => setTrips((open) => !open)}
                    >
                      {' '}
                      All
                      {' '}
                  </button>
                  &nbsp;
                  <button
                      className={getName('Victor')}
                      type={'button'}
                      role="button"
                      onClick={() => setTrips((open) => !open)}
                    >
                      {' '}
                      Victor
                      {' '}
                  </button>
                  &nbsp;
                  <button
                      className={getName('Phil')}
                      type={'button'}
                      role="button"
                      onClick={() => setTrips((open) => !open)}
                    >
                      {' '}
                      Phil
                      {' '}
                  </button>
                  &nbsp;
                  <button
                      className={getName('Bumo')}
                      type={'button'}
                      role="button"
                      onClick={() => setTrips((open) => !open)}
                    >
                      {' '}
                      Bumo
                      {' '}
                  </button>
                </div>
                <br></br>
                <div className={styles.text}>
                  <label>
                    <b>Year Range: </b>
                  </label>
                  &nbsp;
                  <input 
                    type="text" 
                    placeholder="1998" 
                    value="" 
                    style={{ width: '13%' }} 
                  />
                  &nbsp;   
                  to
                  &nbsp;   
                  <input 
                    type="text" 
                    placeholder="2023" 
                    value="" 
                    style={{ width: '13%' }} 
                  />
                </div>
              </div>
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
          <CSSTransition
            in={isStats}
            timeout={250}
            classNames={{
                enter: styles.leaderboard_enter,
                enterActive: styles.leaderboard_enter_active,
                exit: styles.leaderboard_exit,
                exitActive: styles.leaderboard_exit_active
              }}
            unmountOnExit
            >
              <Stats trips={trips}></Stats>
          </CSSTransition>
        </div>
      </div>
    </CSSTransition>
  );
}
