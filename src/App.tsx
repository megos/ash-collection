import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <MapContainer center={[31.5967656, 130.5552324]} zoom={13} className="map-root">
        <TileLayer
          attribution='<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noreferrer noopener">地理院タイル</a> '
          url="https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default App
