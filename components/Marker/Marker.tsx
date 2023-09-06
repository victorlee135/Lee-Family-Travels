import { useMemo } from 'react';
import Image from 'next/image';
import { Marker as MarkerContainer, Popup } from 'react-leaflet';
import { IPin } from '../../lib';
import {
  getFullDateString,
  getRelativeTimeString,
  getNameString
} from '../../lib';
import styles from './style.module.css';
import { Icon } from 'leaflet';
import { EPinType } from '../../lib';


export const getIcon = (type: EPinType): Icon =>
  new Icon({
    iconUrl: `/markers/${type}.svg`,
    iconSize: [45, 90]
  });

const Marker = ({
  type,
  coordinates,
  city,
  country,
  author,
  photo,
  date
}: IPin) => {
  const icon = getIcon(type);
  const name = useMemo(() => getNameString(author), [author]);

  return (
    <MarkerContainer
      icon={icon}
      position={coordinates}
      title={`${name} at ${city}`}
    >
      <Popup>
        <div>
          <div className={styles.text}>
            <h1>
              {city},<br />
              {country}
            </h1>
            {date && (
              <i>
                {getFullDateString(date)} ({getRelativeTimeString(date)})
              </i>
            )}
            <br />
            <span>{name}</span>
          </div>
          <Image
            alt={`${name} at ${city}`}
            src={photo}
            fill
            className={styles.image}
          />
        </div>
      </Popup>
    </MarkerContainer>
  );
};

export default Marker;