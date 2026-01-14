import { Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { customIcon } from './icon'
import { markers } from './markers'

export const AshCollectionMarkers = () => (
  <MarkerClusterGroup>
    {markers.map(marker => (
      <Marker key={`${marker.lat}:${marker.lng}`} position={[marker.lat, marker.lng]} icon={customIcon}>
        <Popup>{marker.name}</Popup>
      </Marker>
    ))}
  </MarkerClusterGroup>
)
