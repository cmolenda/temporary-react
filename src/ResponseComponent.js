import React from 'react'
import Reflux from 'reflux'
import AppStore from './stores/AppStore';

class ResponseComponent extends Reflux.Component {

  constructor(props) {
		super(props);
		this.store = AppStore;
	}

  render() {
    return (
        <div style={this.props.style} >
          <h1>Response</h1>
          <p>{this.state.appStore.newValue }</p>
        </div>
    )
  }
}

export default ResponseComponent
