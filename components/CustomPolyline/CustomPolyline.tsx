import { LatLngExpression } from "leaflet";
import { Polyline } from "react-leaflet";



const CustomPolyline = ({tripId, markers, color, selectedTripIndex}) => {
    const coordinates: LatLngExpression[] = markers.map((marker) => marker.coordinates);
    console.log("Polyline input: tripid: ", tripId);
    console.log("Polyline input: selectedTripIndex ", selectedTripIndex);
    const isSelected = tripId === selectedTripIndex;

    const createPolyline = () => {
        if (coordinates.length < 2) {
            // Do not create a Polyline if there are fewer than 2 coordinates.
            return null;
        }

        
          if (isSelected) {
            // Create a highlighted polyline if isSelected is true
            console.log("Highlighted poly for: ", selectedTripIndex);
            return <Polyline 
                key={"h" + color}
                positions={coordinates}
                color={color}
                weight={3.5}
                fillOpacity={5} />;
          } else {  
            console.log("Dashed poly for ", tripId);
            return <Polyline 
                key={"d" + color}
                positions={coordinates}
                color={color}
                weight={2}
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