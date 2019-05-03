import React, { Component } from 'react'
import { Page } from 'react-onsenui'
import LeafletMap from './components/LeafletMap'
import Toolbar from './components/Toolbar'
import Location from './components/Location'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: [31.5967656, 130.5552324],
    }
  }

  render() {
    const { center } = this.state
    return (
      <Page
        className="App"
        renderFixed={() => <Location />}
        renderToolbar={() => <Toolbar />}
      >
        <LeafletMap center={center} />
      </Page>
    )
  }
}
