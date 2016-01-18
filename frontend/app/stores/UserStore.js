import alt from '../alt';
import UserActions from '../actions/UserActions';

class UserStore {
  constructor() {
    this.bindListeners({
      initialize: UserActions.initialize,
      updateProfile: UserActions.updateProfile,
      login: UserActions.login,
      logout: UserActoins.logout
    });
  }
  initialize(resp){
    this.setState({...resp});
  }
  updateProfile(resp){
    this.setState({...resp});
  }
  login(resp){
    debugger;
    this.setState({...resp});
  }
  logout(resp){
    this.setState({...resp});
  }
}

export default alt.createStore(UserStore);
