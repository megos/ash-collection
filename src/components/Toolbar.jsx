import React, { Component } from 'react'
import { Toolbar as OnsToolbar, ToolbarButton, BackButton } from 'react-onsenui'
import InfoPage from '../pages/InfoPage'

export default class Toolbar extends Component {
  state = {
    title: '灰これ',
  }
  pushPage() {
    this.props.navigator.pushPage({component: InfoPage});
  }
  popPage() {
    this.props.navigator.popPage();
  }

  render() {
    const { title } = this.state
    return (
      <OnsToolbar>
        {this.props.navigator.pages.length > 1 &&
        <div className="left">
          <BackButton onClick={this.popPage.bind(this)}>戻る</BackButton>
        </div>
        }
        <div className="center">
          {title}
        </div>
        <div className="right">
          <ToolbarButton onClick={this.pushPage.bind(this)}>これはなに？</ToolbarButton>
        </div>
      </OnsToolbar>
    )
  }
}
