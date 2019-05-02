import React from 'react'
import { Page } from 'react-onsenui'
import LeafletMap from './components/LeafletMap'
import Toolbar from './components/Toolbar'
import Location from './components/Location'

function App() {
  return (
    <Page
      className="App"
      renderFixed={() => <Location />}
      renderToolbar={() => <Toolbar />}
    >
      <LeafletMap />
    </Page>
  )
}

export default App
