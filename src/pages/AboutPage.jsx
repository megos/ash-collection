import React, { Component } from 'react'
import { Page } from 'react-onsenui'
import AboutToolbar from '../components/AboutToolbar'

export default class AboutPage extends Component {
  render() {
    return (
      <Page
        renderToolbar={() => <AboutToolbar />}
      >
        This is info page.
      </Page>
    )
  }
}
