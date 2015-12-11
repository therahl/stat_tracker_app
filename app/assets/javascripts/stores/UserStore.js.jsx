(() => {
  class UserStore {
    constructor() {
      this.bindListeners({
        initialize: UserActions.initialize,
      });
    }
    initialize(resp){
      this.setState({...resp});
    }
  }

  this.UserStore = alt.createStore(UserStore, 'UserStore');
})();
