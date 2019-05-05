import React, { Component } from 'react'
import { Page } from 'react-onsenui'
import Toolbar from '../components/Toolbar'

export default class InfoPage extends Component {
  render() {
    return (
      <Page
        renderToolbar={() => <Toolbar navigator={this.props.navigator} />}
      >
        This is info page.
      </Page>
    )
  }
}
