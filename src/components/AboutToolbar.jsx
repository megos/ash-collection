import React, { Component } from 'react'
import { Toolbar, BackButton } from 'react-onsenui'
import { withRouter } from 'react-router'

class AboutToolbar extends Component {
  state = {
    title: 'このアプリについて',
  }

  handleClick = () => {
    // eslint-disable-next-line react/prop-types
    const { history } = this.props
    // TODO: if no history
    // eslint-disable-next-line react/prop-types
    history.goBack()
  }

  render() {
    const { title } = this.state
    return (
      <Toolbar>
        <div className="left">
          <BackButton onClick={this.handleClick}>
            戻る
          </BackButton>
        </div>
        <div className="center">
          {title}
        </div>
      </Toolbar>
    )
  }
}

export default withRouter(AboutToolbar)
