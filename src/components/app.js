import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* for nested routes */}
        <h3>{ this.props.children }</h3>
      </div>
    );
  }
}
