import React, { Component } from 'react'
import { Page } from 'react-onsenui'
import LeafletMap from './components/LeafletMap'
import Toolbar from './components/Toolbar'
import Location from './components/Location'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userPosition: [31.5967656, 130.5552324],
    }
    this.onPositionChange = this.onPositionChange.bind(this)
  }

  onPositionChange(pos) {
    const { latitude, longitude } = pos.coords
    this.setState({
      userPosition: [latitude, longitude],
    })
  }

  render() {
    const { userPosition } = this.state
    return (
      <Page
        className="App"
        renderFixed={() => <Location onPositionChange={this.onPositionChange} />}
        renderToolbar={() => <Toolbar />}
      >
        <LeafletMap userPosition={userPosition} />
      </Page>
    )
  }
}
