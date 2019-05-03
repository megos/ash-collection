import React, { Component } from 'react'
import ons from 'onsenui'
import { Fab, Icon } from 'react-onsenui'
import PropTypes from 'prop-types'

export default class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
    }
    this.getCurrentPosition = this.getCurrentPosition.bind(this)
  }

  getCurrentPosition() {
    this.setState({ isLoading: true })
    navigator.geolocation.getCurrentPosition((pos) => {
      this.setState({ isLoading: false })
      const { onPositionChange } = this.props
      if (onPositionChange) {
        onPositionChange(pos)
      }
    }, () => {
      this.setState({ isLoading: false })
      ons.notification.toast('現在地を取得できませんでした', { timeout: 2000 })
    })
  }

  render() {
    const { isLoading } = this.state
    return (
      <Fab
        position="bottom right"
        disabled={isLoading}
      >
        <Icon
          icon={isLoading ? 'md-spinner' : 'md-gps-dot'}
          spin={isLoading}
          size={26}
          onClick={() => this.getCurrentPosition()}
        />
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
