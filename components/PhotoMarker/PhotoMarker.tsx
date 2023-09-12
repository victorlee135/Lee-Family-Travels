import { useMemo, useEffect, useState } from 'react';
import Image from 'next/image';
import { Marker, MarkerProps, Popup } from 'react-leaflet';
import {
  getFullDateString,
  getRelativeTimeString,
  getNameString,
  IPin
} from '../../lib';
import styles from './style.module.css';
import { Icon } from 'leaflet';


export const getIcon: Icon = new Icon({
  iconUrl: `/markers/sticker.svg`,
  iconSize: [45, 45]
})

export interface PhotoMarkerProps{
  pin: IPin;
}

const PhotoMarker = ({ pin }: PhotoMarkerProps) => {
  const icon = getIcon;
  const name = useMemo(() => getNameString(pin.author), [pin.author]);

  return (

    <Marker
      icon={icon}
      position={pin.coordinates}
      title={`${name} at ${pin.city}`}
    >
      <Popup closeOnClick={true}>
        <div>
          <div className={styles.text}>
            <h1>
              {pin.city},<br />
              {pin.country}
            </h1>
            {pin.date && (
              <i>
                {getFullDateString(pin.date)} ({getRelativeTimeString(pin.date)})
              </i>
            )}
            <br />
            <span>{name}</span>
          </div>
          <Image
            alt={`${name} at ${pin.city}`}
            src={pin.photo}
            fill
            className={styles.image}
          />
        </div>
      </Popup>
    </Marker>
  );
};

export default PhotoMarker;