import React, { Component, createElement } from 'react'
import { Navigator } from 'react-onsenui'
import TopPage from './pages/TopPage'

export default class App extends Component {
  renderPage

  render() {
    return (
      <Navigator
        initialRoute={{ component: TopPage }}
        renderPage={(route, navigator) => {
          const props = route.props || {}
          props.navigator = navigator

          return createElement(route.component, props)
        }}
      />
    );
  }
}
