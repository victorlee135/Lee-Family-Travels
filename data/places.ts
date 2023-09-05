import { IPin, EPinType } from '../lib';

export const PLACES: IPin[] = [
    {
      author: 'Victor Lee',
      type: EPinType.Sticker,
      city: 'Barcelona',
      country: 'Spain',
      coordinates: [41.5888, 1.8422],
      date: '2023-08-01',
      photo: '/images/barcelona.jpeg'
    },
    {
      author: 'Victor Lee',
      type: EPinType.Sticker,
      city: 'Sintra',
      country: 'Portugal',
      coordinates: [38.7804, -9.4991],
      date: '2023-08-01',
      photo: '/images/sintra.jpeg'
    }
]