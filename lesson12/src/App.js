import React, { Component } from 'react';
import logo from './logo.svg';
import Heading from './Heading';
import Column from './Column';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Heading>Hello list!</Heading>
        <div className="wrapper">
          <Column>Column 1</Column>
          <Column>Column 2</Column>
        </div>
      </div>
    );
  }
}

export default App;
