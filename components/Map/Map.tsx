import L from 'leaflet';
import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet';

import Trip from '../Trip';
import { ITrip, filter, getGeoData, getStyleByRank, getVisitedLocations } from '../../lib';
import { Filter } from '../Sidebar/Sidebar';
import { useMemo, useState } from 'react';
import CustomPolyline from '../CustomPolyline/CustomPolyline';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { renderToStaticMarkup } from 'react-dom/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


export const createClusterCustomIcon = function (cluster) {
  return L.divIcon({
    className: 'custom-marker-cluster',
    iconSize: L.point(2, 2, true)
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
          inputMarkers={trip.markers} 
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
      );

      
    }
    return components;
  }, [filteredTrips, filterKey]);


  const geoLayerComponents = useMemo(() => {
    const locationMap = getVisitedLocations(filteredTrips);
    const visitedData = getGeoData(locationMap);

    return (
      <GeoJSON key={Math.random() + "geo"} data={visitedData} style={() => ({
          fillColor: "#ffe699",
          weight: 1,
          opacity: 1,
          color: 'grey',
          // dashArray: '5, 5',
          fillOpacity: 0.15,
        })} 
      />
    );
  }, [filteredTrips, filterKey]);


  return (
    <MapContainer
      center={[41.56157392223945, -8.397397824887639]}
      zoom={3.4}
      scrollWheelZoom={true}
      style={{ height: '100vh' }}
      zoomControl={false}
      attributionControl={true}
      closePopupOnClick={true}
    >
      <Ref></Ref>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {/* <MarkerClusterGroup
          iconCreateFunction={createClusterCustomIcon}
          showCoverageOnHover={false}
          maxClusterRadius={10}
        >
          {geoLayerComponents}
          {tripComponents}
      </MarkerClusterGroup> */}
      {geoLayerComponents}
      {tripComponents}
      
      
    </MapContainer>
  )
}