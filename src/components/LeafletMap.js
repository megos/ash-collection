import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import csv from 'csvtojson'
import './LeafletMap.css'

export default class LeafletMap extends Component {
  state = {
    lat: 31.5967656,
    lng: 130.5552324,
    zoom: 9,
    data: [],
  }

  componentDidMount() {
    fetch('../data/3-16_takutikouhai.csv')
      .then((res) => res.text())
      .then((csvData) => {
        csv()
          .fromString(csvData)
          .then((data) => {
            this.setState({ data})
          })
      })
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.state.data.map((d, idx) => (
          <Marker key={idx} autoPan position={[
            d.POINT_Y,
            d.POINT_X,
          ]}>
            <Popup>
              {d["名称"]}
            </Popup>
          </Marker>
        ))}
      </Map>
    )
  }
}

