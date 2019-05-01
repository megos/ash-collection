import React from 'react';
import {Page, Button} from 'react-onsenui';
import SimpleExample from './components/Map'
import './App.css';

function App() {
  return (
    <Page className="App">
      <SimpleExample/>
      <Button>Hello!</Button>
    </Page>
  );
}

export default App;
