import React from 'react';
import {Page, Button} from 'react-onsenui';
import LeafletMap from './components/LeafletMap'
import './App.css';

function App() {
  return (
    <Page className="App">
      <LeafletMap/>
      <Button>Hello!</Button>
    </Page>
  );
}

export default App;
