import L from 'leaflet';
import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet';

import Trip from '../Trip';
import { ITrip, createFrequencyRank, filter, getGeoDataForLocation, getStyleByRank, getVisitedLocations } from '../../lib';
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
          tripName={trip.tripName}
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


  const geoLayerComponents = useMemo(() => {
    const components = [];
    const locationMap = getVisitedLocations(filteredTrips);

    // separate rankings 
    const locFreqMap = createFrequencyRank(locationMap);

    for (const rank of locFreqMap.keys()) {

      const rankMap = locFreqMap.get(rank);
      // get geoData
      const visitedData = getGeoDataForLocation(rankMap);

      // assign color based on rank
      const style = getStyleByRank(rank);

      // create GeoJson based on data
      components.push(
        <GeoJSON key={"r" + rank + "." + Math.random()} data={visitedData} style={style} />
      );
    };
    return components;
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
      {geoLayerComponents}
      {tripComponents}
      
    </MapContainer>
  )
}