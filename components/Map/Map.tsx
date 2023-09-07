import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import Trip from '../Trip';
import { ITrip } from '../../lib';


export interface IFilter {
  name: string;
  type: string;
  checked: boolean;
}


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

// Map -> ITrip -> IPin (have to add trip attribute)

export default function Map({ trips }: { trips: ITrip[] }) {
  return (
    <MapContainer
      center={[41.56157392223945, -8.397397824887639]}
      zoom={3.4}
      scrollWheelZoom={true}
      style={{ height: '100vh' }}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {trips.map((trip: ITrip) => (
          <Trip key={trip.id} markers={trip.markers} />
        ))}
    </MapContainer>
  )
}