import React, { createRef, Component } from 'react'
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import csv from 'csvtojson'
import PropTypes from 'prop-types'
import L from 'leaflet'
import { takutikouhai } from '../data/3-16_takutikouhai'
import { CITY_HALL_POSITION } from '../constants'
import './LeafletMap.css'

// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl

/* eslint-disable global-require */
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})
/* eslint-enable */

export default class LeafletMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: CITY_HALL_POSITION,
      zoom: 11,
      maxZoom: 18,
      data: [],
    }
    this.mapRef = createRef()
  }

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
    if (center[0] !== userPosition[0]
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
    return (
      <Map center={center} ref={this.mapRef} zoom={zoom} maxZoom={maxZoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {data.map((d, idx) => (
            <Marker
              key={idx}
              position={[
                d.lat,
                d.lng,
              ]}
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
  userPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
}
