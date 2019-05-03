import React, { Component } from 'react'
import ons from 'onsenui'
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
    }, () => {
      ons.notification.toast('現在地を取得できませんでした', { timeout: 2000 })
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
