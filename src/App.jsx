import React, { Component } from 'react'
import { Page } from 'react-onsenui'
import LeafletMap from './components/LeafletMap'
import Toolbar from './components/Toolbar'
import Location from './components/Location'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: [31.5967656, 130.5552324],
      zoom: 11,
    }
    this.onPositionChange = this.onPositionChange.bind(this)
  }

  onPositionChange(pos) {
    const { latitude, longitude } = pos.coords
    this.setState({
      center: [latitude, longitude],
      zoom: 18,
    })
  }

  render() {
    const { center, zoom } = this.state
    return (
      <Page
        className="App"
        renderFixed={() => <Location onPositionChange={this.onPositionChange} />}
        renderToolbar={() => <Toolbar />}
      >
        <LeafletMap center={center} zoom={zoom} />
      </Page>
    )
  }
}
