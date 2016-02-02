import request from 'reqwest';
import when from 'when';
import Api from '../services/ApiService';
import UserActions from '../actions/UserActions';

class AuthService {
  login(email, password) {
    // We call the server to log the user in.
    Api.callApi('sessions', 'POST', { session: { email, password}}, UserActions.login);
  }
  logout(){
    Api.callApi('sessions', 'DELETE', UserActions.logout);
  }
  isLoggedIn(){
    let browserStorage = (typeof localStorage === 'undefined') ? null : localStorage;
    if(!browserStorage) return false;
    return !!localStorage.api_token;
  }
}

export default new AuthService()
