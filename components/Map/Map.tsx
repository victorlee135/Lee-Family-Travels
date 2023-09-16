import L from 'leaflet';
import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { countries } from "../../data/geojson";

import Trip from '../Trip';
import { ITrip, Lee, filter, getRandomColor, getVisitedCountries } from '../../lib';
import { Filter } from '../Sidebar/Sidebar';
import { useMemo } from 'react';


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

  const filteredTrips = filter(trips, filterKey);
  const tripComponents = useMemo(() => {
    const components = [];
    for (let i = 0; i < filteredTrips.length; i++) {
      const trip = filteredTrips[i];
      const color = getRandomColor();
      components.push(
        <Trip key={trip.id} markers={trip.markers} mapRef={mapRef} color={color} />
      );
    }
    return components;
  }, [filteredTrips, filterKey]);

  const visitedComponents = useMemo(() => {
    const visitedCountries = getVisitedCountries(filteredTrips);
    const visitedData: any = { type: 'FeatureCollection', features: []};
    for (let i = 0; i < visitedCountries.length; i++) {
      const countryData = countries.features.find(
        (feature) => visitedCountries[i] === feature.properties.name
      );
      visitedData.features.push(countryData);
    }

    return <GeoJSON key={Math.random()} data={visitedData} style={(feature) => ({
      fillColor: 'green', // Set the fill color for all countries
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    })} />;
  }, [filteredTrips, filterKey]);

  // add logic for us states

  // make fill color pretty

  // instead make this a toggle for visited countries


  
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
      {/* {visitedComponents} */}
      {tripComponents}
    </MapContainer>
  )
}