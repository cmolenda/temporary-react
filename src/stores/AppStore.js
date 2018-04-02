import Reflux from 'reflux'
import hasher from '../hasher';
import AppActions from '../actions/AppActions';

class AppStore extends Reflux.Store {

  constructor() {
    super();
    this.listenables = AppActions;
    this.init()
    this.setState({appStore: this.data})
  }

  init(){
    this.data = {
      newValue: ''
    }
  }

  onGetHasher(inputValue) {
    this.data.newValue = hasher(inputValue)
    this.emitData()
  }

  emitData() {
    this.trigger(this.data)
  }
}

export default AppStore;
