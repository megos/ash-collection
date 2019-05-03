import React, { Component } from 'react'
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import csv from 'csvtojson'
import PropTypes from 'prop-types'
import L from 'leaflet'
import { takutikouhai } from '../data/3-16_takutikouhai'
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
  state = {
    zoom: 11,
    maxZoom: 18,
    data: [],
  }

  componentDidMount() {
    csv()
      .fromString(takutikouhai)
      .then((data) => {
        this.setState({ data })
      })
  }

  render() {
    const {
      zoom, maxZoom, data,
    } = this.state
    const { center } = this.props
    return (
      <Map center={center} zoom={zoom} maxZoom={maxZoom}>
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
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
}
