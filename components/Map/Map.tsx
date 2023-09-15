import L from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import Trip from '../Trip';
import { ITrip, Lee, filter } from '../../lib';
import { Filter } from '../Sidebar/Sidebar';


export const createClusterCustomIcon = function (cluster) {
  return L.divIcon({
    html: `<span>${'+' + cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: L.point(30, 30, true)
  });
};

export const arrowIcon = L.divIcon({
  className: 'custom-icon',
  html: '<svg width="20" height="20"><polygon points="0,0 10,10 20,0" fill="blue"/></svg>',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

export interface IFilter {
  name: string;
  type: string;
  checked: boolean;
}


export const DEFAULT_FILTERS: IFilter[] = [
  {
    name: 'Victor',
    type: 'victor',
    checked: true
  },
  {
    name: 'Phil',
    type: 'phil',
    checked: true
  },
  {
    name: 'Mom',
    type: 'mom',
    checked: true
  },
];

export interface MapProps {
  trips: ITrip[];
  mapRef: undefined;
  setMapRef: Function;
  filterKey: Filter;
}

export default function Map({ trips, mapRef, setMapRef, filterKey }: MapProps) {
  const Ref = () => {
    setMapRef(useMap());
    return null;
  };
  // https://ajalacomfort.com/how-to-display-a-map-on-your-website-with-react-leaflet-for-beginners-2020-highlight-specific-countries-with-custom-colors-2/
  return (
    <MapContainer
      center={[41.56157392223945, -8.397397824887639]}
      zoom={3.4}
      scrollWheelZoom={true}
      style={{ height: '100vh' }}
      zoomControl={false}
      closePopupOnClick={true}
    >
      <Ref></Ref>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {filter(trips, filterKey).map((trip: ITrip) => (
          <Trip key={trip.id} markers={trip.markers} mapRef={mapRef} />
        ))}
    </MapContainer>
  )
}