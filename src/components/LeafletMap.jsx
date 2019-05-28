import React, { createRef, Component } from 'react'
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import csv from 'csvtojson'
import PropTypes from 'prop-types'
import L from 'leaflet'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import iconRetinaUrlDefault from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrlDefault from 'leaflet/dist/images/marker-icon.png'
import { takutikouhai } from '../data/3-16_takutikouhai'
import { CITY_HALL_POSITION } from '../constants'
import './LeafletMap.css'
import iconRetinaUrl from '../assets/marker-icon-2x.png'
import iconUrl from '../assets/marker-icon.png'

const icon = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [22, 41], // size of the icon
  iconAnchor: [11, 41], // point of the icon which will correspond to marker's location
  shadowAnchor: [14, 40], // the same for the shadow
  popupAnchor: [0, -41], // point from which the popup should open relative to the iconAnchor
})

// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrlDefault,
  iconUrl: iconUrlDefault,
  shadowUrl,
})

export default class LeafletMap extends Component {
  state = {
    center: CITY_HALL_POSITION,
    zoom: 11,
    maxZoom: 18,
    data: [],
  }

  mapRef = createRef()

  componentDidMount() {
    csv()
      .fromString(takutikouhai)
      .then((data) => {
        this.setState({ data })
      })
  }

  componentDidUpdate() {
    const { center, maxZoom } = this.state
    const { userPosition } = this.props
    if (userPosition
      && center[0] !== userPosition[0]
      && center[1] !== userPosition[1]) {
      const map = this.mapRef.current
      if (map != null) {
        map.leafletElement.flyTo(userPosition, maxZoom)
      }
    }
  }

  render() {
    const {
      center, zoom, maxZoom, data,
    } = this.state
    const { userPosition } = this.props
    return (
      <Map center={center} ref={this.mapRef} zoom={zoom} maxZoom={maxZoom}>
        <TileLayer
          attribution='<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noreferrer noopener">地理院タイル</a> '
          url="https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"
        />
        {userPosition && <Marker position={userPosition} />}
        <MarkerClusterGroup>
          {data.map((d, idx) => (
            <Marker
              key={idx}
              position={[
                d.lat,
                d.lng,
              ]}
              icon={icon}
            >
              <Popup>
                {d.name}
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </Map>
    )
  }
}

LeafletMap.propTypes = {
  userPosition: PropTypes.arrayOf(PropTypes.number),
}

LeafletMap.defaultProps = {
  userPosition: null,
}
