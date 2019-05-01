import React, { Component } from 'react'
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import csv from 'csvtojson'
import './LeafletMap.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

export default class LeafletMap extends Component {
  state = {
    lat: 31.5967656,
    lng: 130.5552324,
    zoom: 11,
    maxZoom: 18,
    data: [],
  }

  componentDidMount() {
    fetch('../data/3-16_takutikouhai.csv')
      .then(res => res.text())
      .then((csvData) => {
        csv()
          .fromString(csvData)
          .then((data) => {
            this.setState({ data })
          })
      })
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const bounds = L.latLngBounds([
      [31.5968539, 130.5571392],
      [31.284584, 130.744951],
    ])
    this.state.data.forEach((d) => {
      bounds.extend([
        d.POINT_Y,
        d.POINT_X,
      ])
    })
    return (
      <Map center={position} zoom={this.state.zoom} maxZoom={this.state.maxZoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {this.state.data.map((d, idx) => (
            <Marker
              key={idx}
              position={[
                d.POINT_Y,
                d.POINT_X,
              ]}
            >
              <Popup>
                {d['名称']}
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </Map>
    )
  }
}
