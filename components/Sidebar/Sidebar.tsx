import { useState } from 'react';
import Image from 'next/image';
import { ITrip, Lee, changeVariables, filter } from '~/lib/utils';
import styles from './style.module.css';
import { CSSTransition } from 'react-transition-group';
import TripDetails from '../TripDetails/TripDetails';
import Stats from '../Stats';


export interface SideBarProps {
    trips: ITrip[];
    isOpen: boolean;
    setOpen: Function;
    mapRef: undefined;
    filterKey: Filter;
    setFilterKey: Function;
}

export interface Filter {
  users: Lee[];
}

export default function Sidebar({ trips, isOpen, setOpen, mapRef, filterKey, setFilterKey }: SideBarProps) {
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

  const getLeeButton = (type: Lee) => {
    if (type === 'All') {
      if (filterKey.users.includes(Lee.All)) {
        return styles.button_active;
      }
      return styles.button;
    } else {
      if (filterKey.users.includes(type)) {
        return styles.button_active;
      }
      return styles.button;
    }
  }
  

  const onClick = (type) => {
    const updatedUsers = filterKey.users.filter((user) => user !== Lee.All);
    
    if (type === 'All') {
      setFilterKey({ users: [Lee.All] });
    } else {
      const userExists = updatedUsers.includes(type);
      if (userExists) {
        if (updatedUsers.length === 1) {
          setFilterKey({ users: [Lee.All] });
        } else {
          setFilterKey({ users: updatedUsers.filter((user) => user !== type) });
        }
      } else {
        setFilterKey({ users: [...updatedUsers, type] });
      }
    }
    console.log("Sidebar: Updated filterKey ", filterKey);
  };
  
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
                  <button className={getLeeButton(Lee.All)} type={'button'} role="button"
                      onClick={() => onClick(Lee.All)} >
                      {' '}All{' '}
                  </button>
                  &nbsp;
                  <button className={getLeeButton(Lee.Victor)} type={'button'} role="button"
                      onClick={() => onClick(Lee.Victor)} >
                      {' '}Victor{' '}
                  </button>
                  &nbsp;
                  <button className={getLeeButton(Lee.Phil)} type={'button'} role="button"
                      onClick={() => onClick(Lee.Phil)} >
                      {' '}Phil{' '}
                  </button>
                  &nbsp;
                  <button className={getLeeButton(Lee.Bumo)} type={'button'} role="button"
                      onClick={() => onClick(Lee.Bumo)} >
                      {' '}Bumo{' '}
                  </button>
                </div>
                <br></br>
                <div className={styles.text}>
                  <label> <b>Year Range: </b> </label>
                  &nbsp;&nbsp;&nbsp;
                  <input type="text" placeholder="1998" 
                    style={{ width: '13%', textAlign: 'center' }} />
                  &nbsp;&nbsp;&nbsp;
                  to
                  &nbsp;&nbsp;&nbsp;
                  <input type="text" placeholder="2023" 
                    style={{ width: '13%', textAlign: 'center' }} />
                </div>
              </div>
              {filter(trips, filterKey).map((trip: ITrip) => (
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
