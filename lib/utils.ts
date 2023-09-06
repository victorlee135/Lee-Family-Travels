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

  // Type of marker on the map
  export enum EPinType {
    Sticker = 'sticker',
    Picture = 'picture',
    Special = 'special'
  }
  
  // Marker on the map
  export interface IPin {
    author: string | string[];
    city: string;
    country: string;
    coordinates: [number, number];
    date: string;
    photo: string;
    type?: EPinType;
    streetview?: string;
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