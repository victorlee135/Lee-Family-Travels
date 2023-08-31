import { MapContainer, LayersControl} from 'react-leaflet';


export default function Map() {
  return (
    <MapContainer
      center={[41.56157392223945, -8.397397824887639]}
      zoom={3.4}
      scrollWheelZoom={true}
      style={{ height: '100vh' }}
    >
    </MapContainer>
  );
}