import { MapContainer, TileLayer } from 'react-leaflet'
import { InfoButton } from './InfoButton'
import 'leaflet/dist/leaflet.css'
import 'react-leaflet-cluster/dist/assets/MarkerCluster.css'
import 'react-leaflet-cluster/dist/assets/MarkerCluster.Default.css'
import './App.css'
import { AshCollectionMarkers } from './AshCollectionMarkers'

function App() {
  return (
    <div className="App">
      <MapContainer center={[31.5967656, 130.5552324]} zoom={13} className="map-root">
        <TileLayer
          attribution='<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noreferrer noopener">地理院タイル</a> '
          url="https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"
        />
        <AshCollectionMarkers />
      </MapContainer>
      <InfoButton />
    </div>
  )
}

export default App
