import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TopPage from './pages/TopPage'
import AboutPage from './pages/AboutPage'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={TopPage} />
        <Route path="/about/" component={AboutPage} />
      </Router>
    )
  }
}
