import { TileLayer, LayersControl } from 'react-leaflet';

import useTheme from '../../hooks/useTheme';

import type { ETheme } from '../../lib';

export interface ITyle {
  id: ETheme;
  name: string;
  url: string;
}

const Tiles = ({ id, url, name }: ITyle) => {
  const { theme, changeTheme } = useTheme();

  return (
    <LayersControl.BaseLayer checked={id === theme} name={name}>
      <TileLayer
        url={url}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        eventHandlers={{
          add: () => {
            changeTheme(id);
          }
        }}
      />
    </LayersControl.BaseLayer>
  );
};

export default Tiles;