(() => {
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

  this.SettingsStore = alt.createStore(SettingsStore, 'SettingsStore');
})();
