import L from 'leaflet';
import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet';
import { countries } from "../../data/geojson";

import Trip from '../Trip';
import { ITrip, filter, getVisitedCountries } from '../../lib';
import { Filter } from '../Sidebar/Sidebar';
import { useMemo, useState } from 'react';
import CustomPolyline from '../CustomPolyline/CustomPolyline';


export const createClusterCustomIcon = function (cluster) {
  return L.divIcon({
    html: `<span>${'+' + cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: L.point(30, 30, true)
  });
};

export interface MapProps {
  trips: ITrip[];
  tripColors: string[];
  mapRef: undefined;
  setMapRef: Function;
  filterKey: Filter;
}

export default function Map({ trips, tripColors, mapRef, setMapRef, filterKey }: MapProps) {
  const Ref = () => {
    setMapRef(useMap());
    return null;
  };


  const [selectedTripIndex, setSelectedTripIndex] = useState(-1);

  const filteredTrips = filter(trips, filterKey);
  const tripComponents = useMemo(() => {

    const components = [];

    for (let i = 0; i < filteredTrips.length; i++) {

      const trip = filteredTrips[i];
      const color = tripColors[trip.id];

      components.push(
        <Trip 
          key={trip.id} 
          tripId={trip.id}
          markers={trip.markers} 
          mapRef={mapRef} 
          color={color}
          selectedTripIndex={selectedTripIndex}
          setSelectedTripIndex={setSelectedTripIndex} />
      );

      components.push(
        <CustomPolyline
          key={"poly" + trip.id}
          tripId={trip.id}
          markers={trip.markers}
          color={color}
          selectedTripIndex={selectedTripIndex} />
      )

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