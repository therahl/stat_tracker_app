import alt from '../alt';
import ApiService from '../services/ApiService';

const BASE_URL = 'http://localhost:3000';

class UserActions {

  initialize(){
    ApiService.callApi('users', 'GET', {}, result => { return this.dispatch(result) });
  }

  updateProfile(data){
    api_token = localStorage.api_token;
    ApiService.callApi('users', 'PUT', { user: data }, result => { return this.dispatch(result) });
    // $.ajax({
    //   url: `${BASE_URL}/api/user`,
    //   method: 'PUT',
    //   dataType: 'JSON',
    //   headers: { Authorization: api_token },
    //   data: { user: data }
    // }).success(result => {
    //   this.dispatch(result);
    // }).fail(error => {
    //   console.log('AJAX FAIL', error);
    // });
  }

  login(user){
    localStorage.setItem('api_token', user.user.auth_token);
    this.dispatch(user.user);
  }

  logout(){
    localStorage.setItem('api_token', '');
    window.location.pathname = '/';
    this.dispatch();
  }
}
export default alt.createActions(UserActions);
