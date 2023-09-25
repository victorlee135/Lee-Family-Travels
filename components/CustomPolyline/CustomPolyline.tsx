import { LatLngExpression } from "leaflet";
import { Polyline } from "react-leaflet";


const CustomPolyline = ({tripId, markers, color, selectedTripIndex}) => {
    const coordinates: LatLngExpression[] = markers.map((marker) => marker.coordinates);
    const isSelected = tripId === selectedTripIndex;

    // nat road trip: gary indiana, des moines, omaha, moab, 

    const createPolyline = () => {
        if (coordinates.length < 2) {
            return null;
        }

        
          if (isSelected) {
            return <Polyline 
                key={"h" + color}
                positions={coordinates}
                color={color}
                weight={3.5}
                fillOpacity={5} />;
          } else {  
            return <Polyline 
                key={"d" + color}
                positions={coordinates}
                color={color}
                weight={2.25}
                fillOpacity={5}
                pathOptions={{
                    dashArray: [5, 5],
                    lineCap: 'round',
                    lineJoin: 'round',
                }} />;
          }
    };

    return (
        <>
            {createPolyline()}
        </>
    );
};

export default CustomPolyline;