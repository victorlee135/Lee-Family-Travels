import L from 'leaflet';
import { MapContainer, LayersControl, LayerGroup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import Marker from '../Marker';
import Tiles from "../Tiles/Tiles"
import type { IPin } from '../../lib';
import type { ITyle } from '../Tiles';
import { ETheme } from '../../lib';


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


export const DEFAULT_TILES: ITyle[] = [
  {
    id: ETheme.Earth,
    name: 'Earth',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  {
    id: ETheme.Light,
    name: 'Light',
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
  },
  {
    id: ETheme.Dark,
    name: 'Dark',
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
  }
];

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



function filterPins(pins: IPin[], { name, type, checked }: IFilter) {
  return (
    <LayersControl.Overlay checked={checked} name={name} key={name}>
      <LayerGroup>
        <MarkerClusterGroup
          iconCreateFunction={createClusterCustomIcon}
          showCoverageOnHover={false}
        >
          {pins
            .filter((pin: IPin) => pin.type.includes(type))
            .map((pin: IPin) => (
              <Marker key={`${pin.coordinates}-${pin.author}`} {...pin} />
            ))}
        </MarkerClusterGroup>
      </LayerGroup>
    </LayersControl.Overlay>
  );
}

// Map -> ITrip -> IPin (have to add trip attribute)


export default function Map({ pins }: { pins: IPin[] }) {
  return (
    <MapContainer
      center={[41.56157392223945, -8.397397824887639]}
      zoom={3.4}
      scrollWheelZoom={true}
      style={{ height: '100vh' }}
    >
      <LayersControl position="topright">
        {DEFAULT_TILES
          .filter((tile: ITyle) => tile.name === "Earth")
          .map((tile) => (
            <Tiles key={tile.name} {...tile} />
        ))}
        {DEFAULT_FILTERS.map((filter: IFilter) => filterPins(pins, filter))}
      </LayersControl>
    </MapContainer>
  );
}