import { DateTime } from 'luxon';

export enum ETheme {
    Earth = 'earth',
    Light = 'light',
    Dark = 'dark'
  }
  
  export type GlobalTheme = {
    theme: ETheme;
    changeTheme: (theme: ETheme) => void;
  };

  
  // Marker on the map
  export interface IPin {
    author: string | string[];
    city: string;
    country: string;
    coordinates: [number, number];
    date: string;
    photo: string;
    type: string | string[];
    streetview?: string;
    isOpen?: boolean;
  }

  export interface ITrip {
    id: string;
    tripName: string;
    author: string | string[];
    startDate: string;
    endDate: string;
    markers: IPin[];
    googlePhotos?: string;
}

function distance(lat1, lat2, lon1, lon2) {
  lon1 = (lon1 * Math.PI) / 180;
  lon2 = (lon2 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  let dlon = lon2 - lon1;
  let dlat = lat2 - lat1;
  let a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));

  let r = 6371;

  return c * r;
}

export function getDistance(coordinates: IPin['coordinates']) {
  const x0 = 41.56157392223945;
  const y0 = -8.397397824887639;
  const x1 = coordinates[0];
  const y1 = coordinates[1];

  return distance(x0, x1, y0, y1);
}

  export const getFullDateString = (date: string) => {
    return new Date(date).toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  export const getRelativeTimeString = (date: string) => {
    return DateTime.fromISO(date)
      .toRelative(DateTime.now())
      .toLocaleString();
  };
  
  export const getNameString = (authors: string[] | string) => {
    if (!Array.isArray(authors)) {
      return authors;
    }
  
    const size = authors.length;
  
    if (size <= 1) {
      return authors.join();
    }
  
    return authors.slice(0, size - 1).join(', ') + ' and ' + authors[size - 1];
  };

  export const sortByOldest = (a: IPin, b: IPin) => {
    return (
      DateTime.fromISO(a.date).toMillis() - DateTime.fromISO(b.date).toMillis()
    );
  };