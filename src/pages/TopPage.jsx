import React, { Component } from 'react'
import { Page } from 'react-onsenui'
import LeafletMap from '../components/LeafletMap'
import TopToolbar from '../components/TopToolbar'
import Location from '../components/Location'
import { CITY_HALL_POSITION } from '../constants'

export default class TopPage extends Component {
  state = {
    userPosition: CITY_HALL_POSITION,
  }

  onPositionChange = (pos) => {
    const { latitude, longitude } = pos.coords
    this.setState({
      userPosition: [latitude, longitude],
    })
  }

  render() {
    const { userPosition } = this.state
    return (
      <Page
        renderFixed={() => <Location onPositionChange={this.onPositionChange} />}
        renderToolbar={() => <TopToolbar />}
      >
        <LeafletMap userPosition={userPosition} />
      </Page>
    )
  }
}
