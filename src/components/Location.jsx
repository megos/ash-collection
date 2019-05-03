import React, { Component } from 'react'
import { Fab, Icon } from 'react-onsenui'

export default class Location extends Component {
  constructor(props) {
    super(props)
    this.getCurrentPosition = this.getCurrentPosition.bind(this)
  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos)
    })
  }

  render() {
    return (
      <Fab position="bottom right">
        <Icon icon="md-gps-dot" size={26} onClick={() => this.getCurrentPosition()} />
      </Fab>
    )
  }
}
