import React, { Component } from 'react'
import { Fab, Icon } from 'react-onsenui'
import PropTypes from 'prop-types'

export default class Location extends Component {
  constructor(props) {
    super(props)
    this.getCurrentPosition = this.getCurrentPosition.bind(this)
  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { onPositionChange } = this.props
      if (onPositionChange) {
        onPositionChange(pos)
      }
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

Location.propTypes = {
  onPositionChange: PropTypes.func,
}

Location.defaultProps = {
  onPositionChange: null,
}
