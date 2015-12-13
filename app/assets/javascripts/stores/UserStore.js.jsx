(() => {
  class UserStore {
    constructor() {
      this.bindListeners({
        initialize: UserActions.initialize,
        updateProfile: UserActions.updateProfile,
      });
    }
    initialize(resp){
      this.setState({...resp});
    }
    updateProfile(resp){
      this.setState({...resp});
    }
  }

  this.UserStore = alt.createStore(UserStore, 'UserStore');
})();
