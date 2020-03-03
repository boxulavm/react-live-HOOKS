import React, { Component } from 'react';
// import Live from './components/Live';
import Hooks from './components/Hooks';

export default class App extends Component {

  render() {
    return (
      <div className="container p-5">
        {/* <Live /> */}
        <Hooks />
      </div>
    )
  }
}
