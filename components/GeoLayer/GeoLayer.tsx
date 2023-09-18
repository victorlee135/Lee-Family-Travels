import { ITrip, filter, getVisitedCountries } from '../../lib';
import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet';
import { countries } from "../../data/countries";

const GeoLayer = ({trips}) => {
    const visitedCountries = getVisitedCountries(trips);
    const visitedData: any = { type: 'FeatureCollection', features: []};

    for (let i = 0; i < visitedCountries.length; i++) {
        const countryData = countries.features.find(
          (feature) => visitedCountries[i] === feature.properties.name
        );
        visitedData.features.push(countryData);
    };
    
    return (
        <GeoJSON 
            key={Math.random()} 
            data={visitedData} 
            style={(feature) => ({
                fillColor: 'green', // Set the fill color for all countries
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7,
            })} 
        />
    );
};

export default GeoLayer;