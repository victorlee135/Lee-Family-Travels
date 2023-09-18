import { DateTime } from 'luxon';
import { countries } from "../data/countries";
import { states } from "../data/usaStates";
import { provinces } from "../data/canProvinces";


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
  province?: string;
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

export const getCountryOrState = (marker: IPin) => {
  if (marker.country === "United States of America") {
    return marker.state;
  } else if (marker.country === "Canada") {
    return marker.province;
  } else {
    return marker.country;
  }
}

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

  export function getVisitedLocations(trips) {

    const locMap = new Map<string, Map<string, number>>([
      ["countries", new Map<string, number>()],
      ["states", new Map<string, number>()],
      ["provinces", new Map<string, number>()],
    ]);

    trips.forEach((trip) => {
      trip.markers.forEach((marker) => {
        if (marker.country === "United States of America") {

          const statesMap = locMap.get("states");
          const currStateCount = statesMap.get(marker.state) || 0;
          statesMap.set(marker.state, currStateCount + 1);

        } else if (marker.country === "Canada") {

          const provMap = locMap.get("provinces");
          const currProvCount = provMap.get(marker.province) || 0;
          provMap.set(marker.province, currProvCount + 1);

        } else {
          
          const countryMap = locMap.get("countries");
          const currCountryCount = countryMap.get(marker.country) || 0;
          countryMap.set(marker.country, currCountryCount + 1);

        }
      });
    });

    return locMap;

  }

  // have to separate them by frequency first
  export function createFrequencyRank(locMap) {
    const initialMap = new Map<string, string[]>([
      ["countries", []],
      ["states", []],
      ["provinces", []],
    ])
    const colorRankMap = new Map<number, Map<string, string[]>>([
      [1, new Map<string, string[]>()],
      [2, new Map<string, string[]>()],
      [3, new Map<string, string[]>()],
      [4, new Map<string, string[]>()],
      [5, new Map<string, string[]>()],
    ]);
    
    for (const type of locMap.keys()) {
      const locFreqMap = locMap.get(type);

      for (const location of locFreqMap.keys()) {
        const rank = Math.min(locFreqMap.get(location), 5);

        let rankMap = colorRankMap.get(rank);
        if (!rankMap) {
          rankMap = new Map<string, string[]>();
          colorRankMap.set(rank, rankMap);
        }

        const locationList = rankMap.get(type) || [];
        locationList.push(location);

        rankMap.set(type, locationList);

      }
    }
    return colorRankMap;
  }

  function getGeoData(type, locName) {
    if (type === "countries") {
      return countries.features.find(
        (feature) => locName === feature.properties.name
      );
    }

    if (type === "states") {
      return states.features.find(
        (feature) => locName === feature.properties.name);
    }

    if (type === "provinces") {
      return provinces.features.find(
        (feature) => locName === feature.properties.name);
    }

    console.error("Unrecognized type: ", type);
  }

  export function getGeoDataForLocation(map) {
    const visitedData: any = { type: 'FeatureCollection', features: []};

    for (const type of map.keys()) {

      const locations = map.get(type);

      for (const location of locations) {
        const data = getGeoData(type, location);
        visitedData.features.push(data);
      }

    }

    return visitedData;
  }

  export function getStyleByRank(rank) {
    // FD8D3C
    // 1 0.2
    // 2. 0.6
    let color = "#FD8D3C";
    if (rank === 1) {
      color = "#ffe699";
    } else if (rank === 2) {
      color = "#ffb84d";
    } else if (rank === 3) {
      color = "#e67300";
    } else if (rank === 4) {
      color = "#b35900";
    } else {
      color = "#cc4400";
    }
    return {
      fillColor: color, // Set the fill color for all countries
      weight: 1,
      opacity: 1,
      color: 'grey',
      fillOpacity: 0.25,
    }
  }



  export function getVisitedStates(trips) {
    const stateSet = new Set();
    trips.forEach((trip) => {
      trip.markers.forEach((marker) => {
        if (marker.country === "United States of America") {
          stateSet.add(marker.state);
        }
      });
    });
    return Array.from(stateSet);
  }

// Good colors
// color: #231CF6; color: #B51135; #B72210 color: #6136DD; color: #121BA8DE;
// color: #C1309C;
// olor: #5C811A; color: #7E38FA; color: #C111AC; color: #591A93;

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
  
