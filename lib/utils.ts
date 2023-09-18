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

export enum Lee {
  All = 'All',
  Victor = 'Victor',
  Phil = 'Phil',
  Bumo = 'Bumo'
}

// Marker on the map
export interface IPin {
  author: string | string[];
  city: string;
  state?: string;
  country: string;
  coordinates: [number, number];
  date: string;
  photo: string;
  lee: Lee[];
  streetview?: string;
  isOpen?: boolean;
}

export interface ITrip {
  id: string;
  tripName: string;
  author: string;
  lee: Lee[];
  startDate: string;
  endDate: string;
  markers: IPin[];
  googlePhotos?: string;
}

export interface Filters {
  lee: Lee[];
  dateRange: [number, number];
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

  return distance(x0, x1, y0, y1) / 1.609;
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

export function changeVariables(view: boolean, 
  setTrips: (boolean) => void, setStatistics: (boolean) => void) {

    if (view) {
      setStatistics(false)
      setTimeout(() => setTrips(true), 250);
    } else{
      setTrips(false);
      setTimeout(() => setStatistics(true), 250);
    }
  }

  export function filter(trips, filterKey) {
    return trips.filter((trip) => {
      if (filterKey.users.length === 0 ) {
        return true;
      }
  
      if (filterKey.users.includes('All')) {
        return true;
      }
  
      const allUsersMatch = filterKey.users.every((user) => trip.lee.includes(user));
  
      if (allUsersMatch) {
        return true;
      }
  
      return false;
    });
  }

  export function getVisitedCountries(trips) {
    const countriesSet = new Set();
    trips.forEach((trip) => {
      trip.markers.forEach((marker) => {
        countriesSet.add(marker.country);
      });
    });
    return Array.from(countriesSet);
  }

export function getRandomColor(): string {
  const minContrast = 4.5; // Minimum contrast ratio for AA
  let color = getRandomHexColor();

  while (calculateContrast(color, "#FFFFFF") < minContrast) {
    color = getRandomHexColor();
  }

  return color;
}

function getRandomHexColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }

  return color;
}

function calculateContrast(color1: string, color2: string): number {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function getLuminance(color: string): number {
  const hex = color.slice(1); // Remove the #
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  return (
    0.2126 * adjustGamma(r) + 0.7152 * adjustGamma(g) + 0.0722 * adjustGamma(b)
  );
}

function adjustGamma(value: number): number {
  return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
}

  export function getNames(names) {
    const size = names.length;

    if (size <= 1) {
      return names.join();
    }
    return names.slice(0, size - 1).join(', ') + ' and ' + names[size - 1];
  }
  
