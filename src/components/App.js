import React, { Component } from 'react';
import '../styles/App.css';
import GetImageForm from './GetImageForm.js';

class App extends Component {
  render() {
    return (
      <div>
      <h1>Welcome to the Mars Rover Viewer</h1>
      <h4>Images may only display for certain days!</h4>
      <GetImageForm />
      </div>
    );
  }
}

export default App;
