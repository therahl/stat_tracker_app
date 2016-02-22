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
    this.setState({...resp.user});
  }
  updateProfile(resp){
    this.setState({...resp.user});
  }
  login(resp){
    this.setState({...resp.user, isLoggedIn: true});
  }
  logout(resp){
    this.setState({...resp.user, isLoggedIn: false});
  }
}

export default alt.createStore(UserStore);
