import React, { Component } from 'react'
import { Toolbar as OnsToolbar, ToolbarButton } from 'react-onsenui'
import { withRouter } from 'react-router'

class TopToolbar extends Component {
  state = {
    title: '灰これ',
  }

  handleClick = () => {
    // eslint-disable-next-line
    this.props.history.push('/about')
  }

  render() {
    const { title } = this.state
    return (
      <OnsToolbar>
        <div className="center">
          {title}
        </div>
        <div className="right">
          <ToolbarButton onClick={this.handleClick}>
            これは？
          </ToolbarButton>
        </div>
      </OnsToolbar>
    )
  }
}

export default withRouter(TopToolbar)
