import React, { Component } from 'react'
import { Fab, Icon } from 'react-onsenui'

export default class Location extends Component {
  render() {
    return (
      <Fab position="bottom right">
        <Icon icon="md-gps-dot" size={26} />
      </Fab>
    )
  }
}
