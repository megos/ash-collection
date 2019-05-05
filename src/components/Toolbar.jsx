import React, { Component } from 'react'
import { Toolbar as OnsToolbar, ToolbarButton, BackButton } from 'react-onsenui'
import InfoPage from '../pages/InfoPage'

export default class Toolbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '灰これ',
    }
    this.pushPage = this.pushPage.bind(this)
    this.popPage = this.popPage.bind(this)
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
        {this.props.navigator.pages.length > 1
        &&
        <div className="left">
          <BackButton onClick={this.popPage}>戻る</BackButton>
        </div>
        }
        <div className="center">
          {title}
        </div>
        <div className="right">
          <ToolbarButton onClick={this.pushPage}>これはなに？</ToolbarButton>
        </div>
      </OnsToolbar>
    )
  }
}
