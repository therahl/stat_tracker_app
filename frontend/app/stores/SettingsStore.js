import alt from '../alt';
import SettingsActions from '../actions/SettingsActions';

class SettingsStore {
  constructor() {
    this.bindListeners({
      handleUpdateSettings: SettingsActions.updateSettings,
      initialize: SettingsActions.initialize,
    });
  }
  initialize(resp){
    this.setState({...resp});
  }
  handleUpdateSettings(resp) {
    this.setState({...resp});
  }
}

export default alt.createStore(SettingsStore);
