import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TopPage from './pages/TopPage'
import AboutPage from './pages/AboutPage'

const App = () => (
  <Router>
    <Route path="/" exact component={TopPage} />
    <Route path="/about/" component={AboutPage} />
  </Router>
)

export default App
