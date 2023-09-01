import { Icon } from 'leaflet';

import { EPinType } from '../../lib';

export const getIcon = (type: EPinType): Icon =>
  new Icon({
    iconUrl: `/markers/${type}.png`,
    iconSize: [45, 90]
  });