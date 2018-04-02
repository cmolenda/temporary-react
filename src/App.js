import Reflux from 'reflux';
import React, { Component } from 'react';
import AppActions from './actions/AppActions';
import AppStore from './stores/AppStore';
import ResponseComponent from './ResponseComponent'

class App extends Reflux.Component {

  constructor(props) {
		super(props);
		this.store = AppStore;
	}

  setRaw(event) {
    let inputValue = this.refs.inputRef.value
    console.log("input: " + inputValue)
    this.setState({actual: AppActions.getHasher(inputValue)})
  }

  getStyle() {
    return({
      margin: '10px',
      padding: '10px',
      borderStyle: 'solid'
    })
  }

  render() {
    if(!this.state.appStore) return null

    return (
      <div style={{ display: 'flex' }}>
        <div style={this.getStyle()}>
          <p>input address and tab out</p>
          <input ref={'inputRef'} onBlur={this.setRaw.bind(this)} />
          <ResponseComponent style={this.getStyle()}/>
        </div>

        <ResponseComponent style={this.getStyle()}/>
      </div>
    );
  }
}

export default App;

