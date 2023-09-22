import { IPin, Lee } from '../lib';

const addPin = (author, lee, city, state, province, country, coordinates, date, photo) => {
  return {
    author: author,
    lee: lee,
    city: city,
    state: state,
    province: province,
    country: country,
    coordinates: coordinates,
    date: date,
    photo: photo
  }
}

export const EUR_PICS: IPin[] = [
    {
      author: 'Victor Lee',
      lee: [Lee.Victor],
      city: 'Newark',
      state: 'New Jersey',
      country: 'United States of America',
      coordinates: [40.6895, -74.1745],
      date: '2023-07-27',
      photo: '/images/nice.jpeg'
    },
    {
      author: 'Victor Lee',
      lee: [Lee.Victor],
      city: 'Paris',
      country: 'France',
      coordinates: [48.8566, 2.3522],
      date: '2023-07-27',
      photo: '/images/nice.jpeg'
    },
    {
      author: 'Victor Lee',
      lee: [Lee.Victor],
      city: 'Nice',
      country: 'France',
      coordinates: [43.7102, 7.2620],
      date: '2023-07-27',
      photo: '/images/nice.jpeg'
    },
    {
      author: 'Victor Lee',
      lee: [Lee.Victor],
      city: 'Frejus',
      country: 'France',
      coordinates: [43.4332, 6.7370],
      date: '2023-07-30',
      photo: '/images/frejus.jpeg'
    },
    {
      author: 'Victor Lee',
      lee: [Lee.Victor],
      city: 'Moustiers-Sainte-Marie',
      country: 'France',
      coordinates: [43.8457, 6.2215],
      date: '2023-08-02',
      photo: '/images/mountain.jpeg'
    },
    {
      author: 'Victor Lee',
      lee: [Lee.Victor],
      city: 'Montpellier',
      country: 'France',
      coordinates: [43.6108, 3.8767],
      date: '2023-08-01',
      photo: '/images/montpellier.jpeg'
    },
    {
      author: 'Victor Lee',
      lee: [Lee.Victor],
      city: 'Ibiza',
      country: 'Spain',
      coordinates: [38.9067, 1.4206],
      date: '2023-08-03',
      photo: '/images/ibiza.jpeg'
    },
    {
      author: 'Victor Lee',
      lee: [Lee.Victor],
      city: 'Barcelona',
      country: 'Spain',
      coordinates: [41.5888, 1.8422],
      date: '2023-08-08',
      photo: '/images/barcelona.jpeg'
    },
    {
      author: 'Victor Lee',
      lee: [Lee.Victor],
      city: 'Porto',
      country: 'Portugal',
      coordinates: [41.1579, -8.6291],
      date: '2023-08-11',
      photo: '/images/porto.jpeg'
    },
    {
      author: 'Victor Lee',
      lee: [Lee.Victor],
      city: 'Lisbon',
      country: 'Portugal',
      coordinates: [38.7223, -9.1393],
      date: '2023-08-14',
      photo: '/images/lisbon.jpeg'
    },
    {
      author: 'Victor Lee',
      lee: [Lee.Victor],
      city: 'Sintra',
      country: 'Portugal',
      coordinates: [38.7804, -9.4991],
      date: '2023-08-15',
      photo: '/images/sintra.jpeg'
    },
    {
      author: 'Victor Lee',
      lee: [Lee.Victor],
      city: 'Ponta Delgada',
      country: 'Portugal',
      coordinates: [37.7394, -25.6687],
      date: '2023-08-15',
      photo: '/images/sintra.jpeg'
    }
]

// Calgary -> Canmore -> Banff -> Lake Monroe -> Lake Moraine -> Peyto Lake -> Eureka
export const BANFF_PICS: IPin[] = [
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Calgary',
    province: 'Alberta',
    country: 'Canada',
    coordinates: [51.0447, -114.0719],
    date: '2023-08-18',
    photo: '/images/nice.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Canmore',
    province: 'Alberta',
    country: 'Canada',
    coordinates: [51.0884, -115.3479],
    date: '2023-08-18',
    photo: '/images/frejus.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Banff',
    province: 'Alberta',
    country: 'Canada',
    coordinates: [51.1784, -115.5708],
    date: '2023-08-18',
    photo: '/images/mountain.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Lake Louise',
    province: 'Alberta',
    country: 'Canada',
    coordinates: [51.4254, -116.1773],
    date: '2023-08-19',
    photo: '/images/montpellier.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Lake Moraine',
    province: 'Alberta',
    country: 'Canada',
    coordinates: [51.3217, -116.1860],
    date: '2023-08-19',
    photo: '/images/ibiza.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Peyto Lake',
    province: 'British Columbia',
    country: 'Canada',
    coordinates: [51.7255, -116.5227],
    date: '2023-08-19',
    photo: '/images/barcelona.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Eureka',
    province: 'Alberta',
    state: 'Montana',
    country: 'United States of America',
    coordinates: [48.8800, -115.0535],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  }
]

export const ASIA_PICS: IPin[] = [
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Narita',
    country: 'Japan',
    coordinates: [35.7719, 140.3925],
    date: '2023-08-18',
    photo: '/images/nice.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Shibuya',
    country: 'Japan',
    coordinates: [35.6595, 139.7005],
    date: '2023-08-18',
    photo: '/images/frejus.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Harajuku',
    country: 'Japan',
    coordinates: [35.6718, 139.7035],
    date: '2023-08-18',
    photo: '/images/mountain.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Yoyogi Park',
    country: 'Japan',
    coordinates: [35.6712, 139.6945],
    date: '2023-08-19',
    photo: '/images/montpellier.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Golden Gai',
    country: 'Japan',
    coordinates: [35.6918, 139.7041],
    date: '2023-08-19',
    photo: '/images/ibiza.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Shinjuku',
    country: 'Japan',
    coordinates: [35.6895, 139.6917],
    date: '2023-08-19',
    photo: '/images/barcelona.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Kawaguchiko',
    country: 'Japan',
    coordinates: [35.5022, 138.7654],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Mt. Fuji',
    country: 'Japan',
    coordinates: [35.3606, 138.7274],
    date: '2023-08-19',
    photo: '/images/ibiza.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Akihabara',
    country: 'Japan',
    coordinates: [35.6995, 139.7710],
    date: '2023-08-19',
    photo: '/images/barcelona.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Ueno',
    country: 'Japan',
    coordinates: [35.7127, 139.7730],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Asakusa',
    country: 'Japan',
    coordinates: [35.7142, 139.7967],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Incheon',
    country: 'South Korea',
    coordinates: [37.4645, 126.4327],
    date: '2023-08-18',
    photo: '/images/mountain.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Myeondong',
    country: 'South Korea',
    coordinates: [37.5662, 126.9829],
    date: '2023-08-19',
    photo: '/images/montpellier.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Hanook Village',
    country: 'South Korea',
    coordinates: [37.5573, 127.0405],
    date: '2023-08-19',
    photo: '/images/ibiza.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Dongdaemon',
    country: 'South Korea',
    coordinates: [37.5663, 127.0094],
    date: '2023-08-19',
    photo: '/images/barcelona.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Gwanjang Market',
    country: 'South Korea',
    coordinates: [37.5683, 127.0049],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Gangnam',
    country: 'South Korea',
    coordinates: [37.5172, 127.0473],
    date: '2023-08-19',
    photo: '/images/ibiza.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Seonsudong',
    country: 'South Korea',
    coordinates: [37.5150, 126.9919],
    date: '2023-08-19',
    photo: '/images/barcelona.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Jeonju',
    country: 'South Korea',
    coordinates: [35.8242, 127.1489],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Hongdae',
    country: 'South Korea',
    coordinates: [37.5562, 126.9267],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  }
]

export const ROADTRIP_PICS: IPin[] = [
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Ann Arbor',
    state: 'Michigan',
    country: 'United States of America',
    coordinates: [42.2808, -83.7430],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Gary',
    state: 'Indiana',
    country: 'United States of America',
    coordinates: [41.6020, -87.3372],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Des Moines',
    state: 'Iowa',
    country: 'United States of America',
    coordinates: [41.5868, -93.6250],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Denver',
    state: 'Colorado',
    country: 'United States of America',
    coordinates: [39.7392, -104.9903],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Boulder',
    state: 'Colorado',
    country: 'United States of America',
    coordinates: [40.0150, -105.2705],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Moab',
    state: 'Utah',
    country: 'United States of America',
    coordinates: [38.5733, -109.5498],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Arches National Park',
    state: 'Utah',
    country: 'United States of America',
    coordinates: [38.7331, -109.5925],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Bryce Canyon National Park',
    state: 'Utah',
    country: 'United States of America',
    coordinates: [37.5930, -112.1871],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Horseshoe Bend',
    state: 'Arizona',
    country: 'United States of America',
    coordinates: [36.8750, -111.5100],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Antelope Canyon',
    state: 'Arizona',
    country: 'United States of America',
    coordinates: [36.8619, -111.3743],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Lake Powell',
    state: 'Arizona',
    country: 'United States of America',
    coordinates: [37.0683, -111.2433],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Zion National Park',
    state: 'Utah',
    country: 'United States of America',
    coordinates: [37.2982, -113.0263],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Las Vegas',
    state: 'Nevada',
    country: 'United States of America',
    coordinates: [36.1699, -115.1398],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Carlsbad',
    state: 'California',
    country: 'United States of America',
    coordinates: [33.1581, -117.3506],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  }
]

export const COVIDROAD_PICS: IPin[] = [
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Northville',
    state: 'Michigan',
    country: 'United States of America',
    coordinates: [42.4311, -83.4833],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Gary',
    state: 'Indiana',
    country: 'United States of America',
    coordinates: [41.6020, -87.3372],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Des Moines',
    state: 'Iowa',
    country: 'United States of America',
    coordinates: [41.6868, -93.7250],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Sioux Falls',
    state: 'South Dakota',
    country: 'United States of America',
    coordinates: [43.5446, -96.7311],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Badlands National Park',
    state: 'Iowa',
    country: 'United States of America',
    coordinates: [43.8405, -102.3733],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Yellowstone National Park',
    state: 'Wyoming',
    country: 'United States of America',
    coordinates: [44.4279, -110.5885],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Grand Tetons National Park',
    state: 'Wyoming',
    country: 'United States of America',
    coordinates: [43.7904, -110.6818],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Twin Falls',
    state: 'Idaho',
    country: 'United States of America',
    coordinates: [42.5558, -114.4701],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Reno',
    state: 'California',
    country: 'United States of America',
    coordinates: [39.5296, -119.8138],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Yosemite National Park',
    state: 'California',
    country: 'United States of America',
    coordinates: [37.8651, -119.5383],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Los Angeles',
    state: 'California',
    country: 'United States of America',
    coordinates: [34.0597, -118.3009],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Las Vegas',
    state: 'Nevada',
    country: 'United States of America',
    coordinates: [36.1212, -115.1697],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  }
]

export const HAWAII_PICS: IPin[] = [
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Los Angeles',
    state: 'California',
    country: 'United States of America',
    coordinates: [33.9438, -118.4091],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Lihue',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [21.9750, -159.3389],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Kapaa',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [22.0897, -159.3358],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Anahola',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [22.1396, -159.3122],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Kilauea',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [22.2150, -159.4064],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Hanalei',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [22.2048, -159.4813],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Waimea',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [21.9634, -159.3673],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Koke\'e State Park',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [22.1319, -159.6465],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Kahului',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [20.8947, -156.4700],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Kihei',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [20.7697, -156.4499],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Haiku',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [20.9126, -156.3166],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Ka\'eleku',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [20.7553, -156.0478],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Hana',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [20.7540, -155.9883],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Wailua Falls',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [20.7904, -156.3315],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Makahiku Falls',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [20.7197, -156.2508],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Waimoku Falls',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [20.7267, -156.2553],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Palikea',
    state: 'Hawaii',
    country: 'United States of America',
    coordinates: [20.7107, -156.2494],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  }
];

export const COVID_MOVING_PICS: IPin[] = [
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Westland',
    state: 'Michigan',
    country: 'United States of America',
    coordinates: [42.3242, -83.4002],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Champaign',
    state: 'Illinois',
    country: 'United States of America',
    coordinates: [40.1164, -88.2434],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Omaha',
    state: 'Nebraska',
    country: 'United States of America',
    coordinates: [41.2565, -95.9345],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Denver',
    state: 'Colorado',
    country: 'United States of America',
    coordinates: [39.8680, -104.9719],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Salt Lake City',
    state: 'Utah',
    country: 'United States of America',
    coordinates: [40.7608, -111.8910],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Sacramento',
    state: 'California',
    country: 'United States of America',
    coordinates: [38.5816, -121.4944],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'San Francisco',
    state: 'California',
    country: 'United States of America',
    coordinates: [37.7749, -122.4194],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'San Jose',
    state: 'California',
    country: 'United States of America',
    coordinates: [37.3541, -121.9552],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Santa Cruz',
    state: 'California',
    country: 'United States of America',
    coordinates: [36.9741, -122.0308],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Santa Barbara',
    state: 'California',
    country: 'United States of America',
    coordinates: [34.4208, -119.6982],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'West Adams',
    state: 'California',
    country: 'United States of America',
    coordinates: [34.0316, -118.3417],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  }
];

export const SKIROADTRIP_PICS: IPin[] = [
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Sawtelle - Los Angeles',
    state: 'California',
    country: 'United States of America',
    coordinates: [34.0421, -118.4695],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Las Vegas',
    state: 'Nevada',
    country: 'United States of America',
    coordinates: [36.1215, -115.1704],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Murray',
    state: 'Utah',
    country: 'United States of America',
    coordinates: [40.6669, -111.8879],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Mt Brighton',
    state: 'Utah',
    country: 'United States of America',
    coordinates: [40.5867, -111.6192],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Park City',
    state: 'Utah',
    country: 'United States of America',
    coordinates: [40.6461, -111.4979],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Evanston',
    state: 'Wyoming',
    country: 'United States of America',
    coordinates: [41.2683, -110.9632],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Rock Springs',
    state: 'Wyoming',
    country: 'United States of America',
    coordinates: [41.5875, -109.2029],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Cheyenne',
    state: 'Wyoming',
    country: 'United States of America',
    coordinates: [41.1399, -104.8202],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Bennington',
    state: 'Nebraska',
    country: 'United States of America',
    coordinates: [41.3402, -97.5881],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Gary',
    state: 'Indiana',
    country: 'United States of America',
    coordinates: [41.6020, -87.3372],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Northville',
    state: 'Michigan',
    country: 'United States of America',
    coordinates: [42.3311, -83.4833],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  }
];

export const FLORIDA_MOVING_PICS: IPin[] = [
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Westland',
    state: 'Michigan',
    country: 'United States of America',
    coordinates: [42.3242, -83.4002],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Cincinnati',
    state: 'Ohio',
    country: 'United States of America',
    coordinates: [39.1031, -84.5120],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Lexington',
    state: 'Kentucky',
    country: 'United States of America',
    coordinates: [38.0406, -84.5037],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Knoxville',
    state: 'Tennessee',
    country: 'United States of America',
    coordinates: [35.9606, -83.9207],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Atlanta',
    state: 'Georgia',
    country: 'United States of America',
    coordinates: [33.7490, -84.3880],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Albany',
    state: 'Georgia',
    country: 'United States of America',
    coordinates: [31.5785, -84.1557],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Gainesville',
    state: 'Florida',
    country: 'United States of America',
    coordinates: [29.6516, -82.3248],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor],
    city: 'Orlando',
    state: 'Florida',
    country: 'United States of America',
    coordinates: [28.5383, -81.3792],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  }
];

export const SHEN_FAMILY_PICS: IPin[] = [
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Lake Mary',
    state: 'Florida',
    country: 'United States of America',
    coordinates: [28.7589, -81.3178],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Daytona Beach',
    state: 'Florida',
    country: 'United States of America',
    coordinates: [29.2108, -81.0228],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Jacksonville',
    state: 'Florida',
    country: 'United States of America',
    coordinates: [30.3322, -81.6557],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Savannah',
    state: 'Georgia',
    country: 'United States of America',
    coordinates: [32.0809, -81.0912],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Columbia',
    state: 'South Carolina',
    country: 'United States of America',
    coordinates: [34.0007, -81.0348],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Charlotte',
    state: 'North Carolina',
    country: 'United States of America',
    coordinates: [35.2271, -80.8431],
    date: '2023-08-20',
    photo: '/images/porto.jpeg',
    wayPoint: true
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil, Lee.Bumo],
    city: 'Shenandoah National Park',
    state: 'Virginia',
    country: 'United States of America',
    coordinates: [38.2928, -78.6796],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  }
];

export const SEATTLE_CAMP_PICS: IPin[] = [
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Tacoma',
    state: 'Washington',
    country: 'United States of America',
    coordinates: [47.2529, -122.4443],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Olympia',
    state: 'Washington',
    country: 'United States of America',
    coordinates: [47.0379, -122.9007],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Port Angeles',
    state: 'Washington',
    country: 'United States of America',
    coordinates: [48.1181, -123.4307],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Lake Crescent',
    state: 'Washington',
    country: 'United States of America',
    coordinates: [48.0484, -123.8361],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Forks',
    state: 'Washington',
    country: 'United States of America',
    coordinates: [47.9488, -124.3856],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Rialto Beach',
    state: 'Washington',
    country: 'United States of America',
    coordinates: [47.9159, -124.6371],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Kalaloch',
    state: 'Washington',
    country: 'United States of America',
    coordinates: [47.6177, -124.3497],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  }
];

export const PHIL_BDAY_GORGE_PICS: IPin[] = [
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Tacoma Airport',
    state: 'Washington',
    country: 'United States of America',
    coordinates: [47.2529, -122.3443],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Druids Glen Golf Course',
    state: 'Washington',
    country: 'United States of America',
    coordinates: [47.2973, -122.1281],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Keechelus Lake',
    state: 'Washington',
    country: 'United States of America',
    coordinates: [47.2924, -121.3011],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Cle Elum',
    state: 'Washington',
    country: 'United States of America',
    coordinates: [47.1954, -120.9398],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  },
  {
    author: 'Victor Lee',
    lee: [Lee.Victor, Lee.Phil],
    city: 'Gorge Amphitheater',
    state: 'Washington',
    country: 'United States of America',
    coordinates: [47.0067, -119.9972],
    date: '2023-08-20',
    photo: '/images/porto.jpeg'
  }
];

export const SOUTH_PADRE_PICS: IPin[] = [
  addPin("Victor Lee", [Lee.Victor], "South Padre Island", "Texas", 
    null, "United States of America", [26.1118, -97.1681], '2023-08-20', '/images/porto.jpeg')
]

export const FORT_MYERS_PICS: IPin[] = [
  addPin("Victor Lee", [Lee.Victor], "Fort Myers", "Florida", null, "United States of America", [26.6406, -81.8723], '2023-08-20', '/images/porto.jpeg'),
]

export const FORT_LAUDERDALE_PICS: IPin[] = [
  addPin("Victor Lee", [Lee.Victor], "Fort Lauderdale", "Florida", null, "United States of America", [26.1224, -80.1373], '2023-08-20', '/images/porto.jpeg'),
]

export const WINDSOR_PICS: IPin[] = [
  addPin("Victor Lee", [Lee.Victor], "Windsor", null, "Ontario", "Canada", [42.3149, -83.0364], '2023-08-20', '/images/porto.jpeg'),
]

export const OKEECHOBEE_PICS: IPin[] = [
  addPin("Victor Lee", [Lee.Victor], "Okeechobee", "Florida", null, "United States of America", [27.2439, -80.8298], '2023-08-20', '/images/porto.jpeg'),
]

export const FOREST_PICS: IPin[] = [
  addPin("Victor Lee", [Lee.Victor], "Rothbury", "Michigan", null, "United States of America", [43.6727, -86.2401], '2023-08-20', '/images/porto.jpeg'),
]

export const UNIVERSAL_PICS: IPin[] = [
  addPin("Victor Lee", [Lee.Victor], "Universal Studios Orlando", "Florida", null, "United States of America", [28.4744, -81.4679], '2023-08-20', '/images/porto.jpeg'),
]

export const CEDAR_POINT_PICS: IPin[] = [
  addPin("Victor Lee", [Lee.Victor], "Cedar Point", "Ohio", null, "United States of America", [41.4819, -82.6836], '2023-08-20', '/images/porto.jpeg'),
]

export const HIGGINS_LAKE_PICS: IPin[] = [
  addPin("Victor Lee", [Lee.Victor], "Higgins Lake", "Michigan", null, "United States of America", [44.5059, -84.7658], '2023-08-20', '/images/porto.jpeg')
]



// salt lake city
// brighton -> park city
// brighton -> solitude -> deer valley -> park city -> snowbird

// Trips
// senior spring break



// stand alones
// pheonix
// forest x2
// ann arbor (all 4 year houses, big house)
// djs up north
// higgins lake
// edc x3
// chicago
// vegas (fremont) x2
// universal
// south padre
// strouds lake house
// cedar point
// fort myers
// fort lauderdale
// windsor x2
// toronto
// okeechobee
// hard summer
// head in the clouds
// outside lands
// la techno one
// la historic park
// movement
// carlsbad
// san diego (little saigon, pacific, ob, gaslamp, cornado, balboa)