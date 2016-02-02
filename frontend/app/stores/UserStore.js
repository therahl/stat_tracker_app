import alt from '../alt';
import UserActions from '../actions/UserActions';

class UserStore {
  constructor() {
    this.bindListeners({
      initialize: UserActions.initialize,
      updateProfile: UserActions.updateProfile,
      login: UserActions.login,
      logout: UserActions.logout
    });
  }
  initialize(resp){
    this.setState({...resp});
  }
  updateProfile(resp){
    this.setState({...resp});
  }
  login(resp){
    this.setState({...resp, isLoggedIn: true});
  }
  logout(resp){
    this.setState({...resp, isLoggedIn: false});
  }
}

export default alt.createStore(UserStore);
