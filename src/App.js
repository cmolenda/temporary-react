import hasher from './hasher';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      raw: ''
    }
  }

  setRaw(event) {
    this.setState({ raw: event.currentTarget.value })
  }

  getHash() {
    return hasher(this.state.raw);
  }

  render() {
    const style = {
      margin: '10px',
      padding: '10px',
      borderStyle: 'solid'
    };

    return (
      <div style={{ display: 'flex' }}>
        <div style={style}>
          <p>Calculation Input. All responses should match</p>
          <input onBlur={this.setRaw.bind(this)} />
          <div style={style}>
            <h1>Response</h1>
            <p>{this.getHash.bind(this)()}</p>
          </div>
        </div>

        <div style={style} >
          <h1>Response</h1>
          <p>{this.getHash.bind(this)()}</p>
        </div>
      </div>
    );
  }
}

export default App;
