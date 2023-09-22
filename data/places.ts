import { IPin, Lee } from '../lib';

const addPin = (author, lee, city, state, province, country, coordinates, date, photo, wayPoint?) => {
  return {
    author: author,
    lee: lee,
    city: city,
    state: state,
    province: province,
    country: country,
    coordinates: coordinates,
    date: date,
    photo: photo,
    wayPoint: wayPoint
  }
}

export const EUR_PICS: IPin[] = [
  addPin('Victor Lee', [Lee.Victor], 'Newark', 'New Jersey', null, 'United States of America', [40.6895, -74.1745], '2023-07-27', '/images/nice.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Paris', null, null, 'France', [48.8566, 2.3522], '2023-07-27', '/images/nice.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Nice', null, null, 'France', [43.7102, 7.2620], '2023-07-27', '/images/nice.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Frejus', null, null, 'France', [43.4332, 6.7370], '2023-07-30', '/images/frejus.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Moustiers-Sainte-Marie', null, null, 'France', [43.8457, 6.2215], '2023-08-02', '/images/mountain.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Montpellier', null, null, 'France', [43.6108, 3.8767], '2023-08-01', '/images/montpellier.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Ibiza', null, null, 'Spain', [38.9067, 1.4206], '2023-08-03', '/images/ibiza.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Barcelona', null, null, 'Spain', [41.5888, 1.8422], '2023-08-08', '/images/barcelona.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Porto', null, null, 'Portugal', [41.1579, -8.6291], '2023-08-11', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Lisbon', null, null, 'Portugal', [38.7223, -9.1393], '2023-08-14', '/images/lisbon.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Sintra', null, null, 'Portugal', [38.7804, -9.4991], '2023-08-15', '/images/sintra.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Ponta Delgada', null, null, 'Portugal', [37.7394, -25.6687], '2023-08-15', '/images/sintra.jpeg')
];


// Calgary -> Canmore -> Banff -> Lake Monroe -> Lake Moraine -> Peyto Lake -> Eureka
export const BANFF_PICS: IPin[] = [
  addPin('Victor Lee', [Lee.Victor], 'Calgary', null, 'Alberta', 'Canada', [51.0447, -114.0719], '2023-08-18', '/images/nice.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Canmore', null, 'Alberta', 'Canada', [51.0884, -115.3479], '2023-08-18', '/images/frejus.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Banff', null, 'Alberta', 'Canada', [51.1784, -115.5708], '2023-08-18', '/images/mountain.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Lake Louise', null, 'Alberta', 'Canada', [51.4254, -116.1773], '2023-08-19', '/images/montpellier.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Lake Moraine', null, 'Alberta', 'Canada', [51.3217, -116.1860], '2023-08-19', '/images/ibiza.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Peyto Lake', null, 'British Columbia', 'Canada', [51.7255, -116.5227], '2023-08-19', '/images/barcelona.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Eureka', 'Montana', null, 'United States of America', [48.8800, -115.0535], '2023-08-20', '/images/porto.jpeg')
];


export const ASIA_PICS: IPin[] = [
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Narita', null, null, 'Japan', [35.7719, 140.3925], '2023-08-18', '/images/nice.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Shibuya', null, null, 'Japan', [35.6595, 139.7005], '2023-08-18', '/images/frejus.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Harajuku', null, null, 'Japan', [35.6718, 139.7035], '2023-08-18', '/images/mountain.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Yoyogi Park', null, null, 'Japan', [35.6712, 139.6945], '2023-08-19', '/images/montpellier.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Golden Gai', null, null, 'Japan', [35.6918, 139.7041], '2023-08-19', '/images/ibiza.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Shinjuku', null, null, 'Japan', [35.6895, 139.6917], '2023-08-19', '/images/barcelona.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Kawaguchiko', null, null, 'Japan', [35.5022, 138.7654], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Mt. Fuji', null, null, 'Japan', [35.3606, 138.7274], '2023-08-19', '/images/ibiza.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Akihabara', null, null, 'Japan', [35.6995, 139.7710], '2023-08-19', '/images/barcelona.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Ueno', null, null, 'Japan', [35.7127, 139.7730], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Asakusa', null, null, 'Japan', [35.7142, 139.7967], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Incheon', null, null, 'South Korea', [37.4645, 126.4327], '2023-08-18', '/images/mountain.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Myeondong', null, null, 'South Korea', [37.5662, 126.9829], '2023-08-19', '/images/montpellier.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Hanook Village', null, null, 'South Korea', [37.5573, 127.0405], '2023-08-19', '/images/ibiza.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Dongdaemon', null, null, 'South Korea', [37.5663, 127.0094], '2023-08-19', '/images/barcelona.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Gwanjang Market', null, null, 'South Korea', [37.5683, 127.0049], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Gangnam', null, null, 'South Korea', [37.5172, 127.0473], '2023-08-19', '/images/ibiza.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Seonsudong', null, null, 'South Korea', [37.5150, 126.9919], '2023-08-19', '/images/barcelona.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Jeonju', null, null, 'South Korea', [35.8242, 127.1489], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Hongdae', null, null, 'South Korea', [37.5562, 126.9267], '2023-08-20', '/images/porto.jpeg')
];


export const ROADTRIP_PICS: IPin[] = [
  addPin('Victor Lee', [Lee.Victor], 'Ann Arbor', 'Michigan', null, 'United States of America', [42.2808, -83.7430], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Gary', 'Indiana', null, 'United States of America', [41.6020, -87.3372], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Des Moines', 'Iowa', null, 'United States of America', [41.5868, -93.6250], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Denver', 'Colorado', null, 'United States of America', [39.7392, -104.9903], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Boulder', 'Colorado', null, 'United States of America', [40.0150, -105.2705], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Moab', 'Utah', null, 'United States of America', [38.5733, -109.5498], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Arches National Park', 'Utah', null, 'United States of America', [38.7331, -109.5925], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Bryce Canyon National Park', 'Utah', null, 'United States of America', [37.5930, -112.1871], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Horseshoe Bend', 'Arizona', null, 'United States of America', [36.8750, -111.5100], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Antelope Canyon', 'Arizona', null, 'United States of America', [36.8619, -111.3743], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Lake Powell', 'Arizona', null, 'United States of America', [37.0683, -111.2433], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Zion National Park', 'Utah', null, 'United States of America', [37.2982, -113.0263], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Las Vegas', 'Nevada', null, 'United States of America', [36.1699, -115.1398], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Carlsbad', 'California', null, 'United States of America', [33.1581, -117.3506], '2023-08-20', '/images/porto.jpeg')
];


export const COVIDROAD_PICS: IPin[] = [
  addPin('Victor Lee', [Lee.Victor], 'Northville', 'Michigan', null, 'United States of America', [42.4311, -83.4833], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Gary', 'Indiana', null, 'United States of America', [41.6020, -87.3372], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Des Moines', 'Iowa', null, 'United States of America', [41.6868, -93.7250], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Sioux Falls', 'South Dakota', null, 'United States of America', [43.5446, -96.7311], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Badlands National Park', 'Iowa', null, 'United States of America', [43.8405, -102.3733], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Yellowstone National Park', 'Wyoming', null, 'United States of America', [44.4279, -110.5885], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Grand Tetons National Park', 'Wyoming', null, 'United States of America', [43.7904, -110.6818], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Twin Falls', 'Idaho', null, 'United States of America', [42.5558, -114.4701], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Reno', 'California', null, 'United States of America', [39.5296, -119.8138], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Yosemite National Park', 'California', null, 'United States of America', [37.8651, -119.5383], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Los Angeles', 'California', null, 'United States of America', [34.0597, -118.3009], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Las Vegas', 'Nevada', null, 'United States of America', [36.1212, -115.1697], '2023-08-20', '/images/porto.jpeg')
];

export const HAWAII_PICS: IPin[] = [
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Los Angeles', 'California', null, 'United States of America', [33.9438, -118.4091], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Lihue', 'Hawaii', null, 'United States of America', [21.9750, -159.3389], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Kapaa', 'Hawaii', null, 'United States of America', [22.0897, -159.3358], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Anahola', 'Hawaii', null, 'United States of America', [22.1396, -159.3122], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Kilauea', 'Hawaii', null, 'United States of America', [22.2150, -159.4064], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Hanalei', 'Hawaii', null, 'United States of America', [22.2048, -159.4813], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Waimea', 'Hawaii', null, 'United States of America', [21.9634, -159.3673], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Koke\'e State Park', 'Hawaii', null, 'United States of America', [22.1319, -159.6465], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Kahului', 'Hawaii', null, 'United States of America', [20.8947, -156.4700], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Kihei', 'Hawaii', null, 'United States of America', [20.7697, -156.4499], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Haiku', 'Hawaii', null, 'United States of America', [20.9126, -156.3166], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Ka\'eleku', 'Hawaii', null, 'United States of America', [20.7553, -156.0478], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Hana', 'Hawaii', null, 'United States of America', [20.7540, -155.9883], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Wailua Falls', 'Hawaii', null, 'United States of America', [20.7904, -156.3315], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Makahiku Falls', 'Hawaii', null, 'United States of America', [20.7197, -156.2508], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Waimoku Falls', 'Hawaii', null, 'United States of America', [20.7267, -156.2553], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Palikea', 'Hawaii', null, 'United States of America', [20.7107, -156.2494], '2023-08-20', '/images/porto.jpeg')
];


export const COVID_MOVING_PICS: IPin[] = [
  addPin('Victor Lee', [Lee.Victor], 'Westland', 'Michigan', null, 'United States of America', [42.3242, -83.4002], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Champaign', 'Illinois', null, 'United States of America', [40.1164, -88.2434], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Omaha', 'Nebraska', null, 'United States of America', [41.2565, -95.9345], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Denver', 'Colorado', null, 'United States of America', [39.8680, -104.9719], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Salt Lake City', 'Utah', null, 'United States of America', [40.7608, -111.8910], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Sacramento', 'California', null, 'United States of America', [38.5816, -121.4944], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'San Francisco', 'California', null, 'United States of America', [37.7749, -122.4194], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'San Jose', 'California', null, 'United States of America', [37.3541, -121.9552], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Santa Cruz', 'California', null, 'United States of America', [36.9741, -122.0308], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Santa Barbara', 'California', null, 'United States of America', [34.4208, -119.6982], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'West Adams', 'California', null, 'United States of America', [34.0316, -118.3417], '2023-08-20', '/images/porto.jpeg')
];


export const SKIROADTRIP_PICS: IPin[] = [
  addPin('Victor Lee', [Lee.Victor], 'Sawtelle - Los Angeles', 'California', null, 'United States of America', [34.0421, -118.4695], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Las Vegas', 'Nevada', null, 'United States of America', [36.1215, -115.1704], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Murray', 'Utah', null, 'United States of America', [40.6669, -111.8879], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Mt Brighton', 'Utah', null, 'United States of America', [40.5867, -111.6192], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Park City', 'Utah', null, 'United States of America', [40.6461, -111.4979], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Evanston', 'Wyoming', null, 'United States of America', [41.2683, -110.9632], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Rock Springs', 'Wyoming', null, 'United States of America', [41.5875, -109.2029], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Cheyenne', 'Wyoming', null, 'United States of America', [41.1399, -104.8202], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Bennington', 'Nebraska', null, 'United States of America', [41.3402, -97.5881], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Gary', 'Indiana', null, 'United States of America', [41.6020, -87.3372], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Northville', 'Michigan', null, 'United States of America', [42.3311, -83.4833], '2023-08-20', '/images/porto.jpeg')
];

export const FLORIDA_MOVING_PICS: IPin[] = [
  addPin('Victor Lee', [Lee.Victor], 'Westland', 'Michigan', null, 'United States of America', [42.3242, -83.4002], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor], 'Cincinnati', 'Ohio', null, 'United States of America', [39.1031, -84.5120], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Lexington', 'Kentucky', null, 'United States of America', [38.0406, -84.5037], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Knoxville', 'Tennessee', null, 'United States of America', [35.9606, -83.9207], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Atlanta', 'Georgia', null, 'United States of America', [33.7490, -84.3880], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Albany', 'Georgia', null, 'United States of America', [31.5785, -84.1557], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Gainesville', 'Florida', null, 'United States of America', [29.6516, -82.3248], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor], 'Orlando', 'Florida', null, 'United States of America', [28.5383, -81.3792], '2023-08-20', '/images/porto.jpeg')
];

export const SHEN_FAMILY_PICS: IPin[] = [
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Lake Mary', 'Florida', null, 'United States of America', [28.7589, -81.3178], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Daytona Beach', 'Florida', null, 'United States of America', [29.2108, -81.0228], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Jacksonville', 'Florida', null, 'United States of America', [30.3322, -81.6557], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Savannah', 'Georgia', null, 'United States of America', [32.0809, -81.0912], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Columbia', 'South Carolina', null, 'United States of America', [34.0007, -81.0348], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Charlotte', 'North Carolina', null, 'United States of America', [35.2271, -80.8431], '2023-08-20', '/images/porto.jpeg', true),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil, Lee.Bumo], 'Shenandoah National Park', 'Virginia', null, 'United States of America', [38.2928, -78.6796], '2023-08-20', '/images/porto.jpeg')
];

export const SEATTLE_CAMP_PICS: IPin[] = [
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Tacoma', 'Washington', null, 'United States of America', [47.2529, -122.4443], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Olympia', 'Washington', null, 'United States of America', [47.0379, -122.9007], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Port Angeles', 'Washington', null, 'United States of America', [48.1181, -123.4307], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Lake Crescent', 'Washington', null, 'United States of America', [48.0484, -123.8361], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Forks', 'Washington', null, 'United States of America', [47.9488, -124.3856], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Rialto Beach', 'Washington', null, 'United States of America', [47.9159, -124.6371], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Kalaloch', 'Washington', null, 'United States of America', [47.6177, -124.3497], '2023-08-20', '/images/porto.jpeg')
];

export const PHIL_BDAY_GORGE_PICS: IPin[] = [
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Tacoma Airport', 'Washington', null, 'United States of America', [47.2529, -122.3443], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Druids Glen Golf Course', 'Washington', null, 'United States of America', [47.2973, -122.1281], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Keechelus Lake', 'Washington', null, 'United States of America', [47.2924, -121.3011], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Cle Elum', 'Washington', null, 'United States of America', [47.1954, -120.9398], '2023-08-20', '/images/porto.jpeg'),
  addPin('Victor Lee', [Lee.Victor, Lee.Phil], 'Gorge Amphitheater', 'Washington', null, 'United States of America', [47.0067, -119.9972], '2023-08-20', '/images/porto.jpeg')
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