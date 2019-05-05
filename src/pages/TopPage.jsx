import React, { Component } from 'react'
import { Page } from 'react-onsenui'
import LeafletMap from '../components/LeafletMap'
import Toolbar from '../components/Toolbar'
import Location from '../components/Location'
import { CITY_HALL_POSITION } from '../constants'

export default class TopPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userPosition: CITY_HALL_POSITION,
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
        renderFixed={() => <Location onPositionChange={this.onPositionChange} />}
        renderToolbar={() => <Toolbar navigator={this.props.navigator} />}
      >
        <LeafletMap userPosition={userPosition} />
      </Page>
    )
  }
}
