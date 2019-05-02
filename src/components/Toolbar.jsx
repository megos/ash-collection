import React, { Component } from 'react'
import { Toolbar as OnsToolbar } from 'react-onsenui'

export default class Toolbar extends Component {
  state = {
    title: '灰これ',
  }

  render() {
    const { title } = this.state
    return (
      <OnsToolbar>
        <div className="center">
          {title}
        </div>
      </OnsToolbar>
    )
  }
}
