import alt from '../alt';

const BASE_URL = 'http://localhost:3000';

class UserActions {

  initialize(){
    // $.ajax({
    //   url: `${BASE_URL}/api/user`,
    //   method: 'GET',
    //   dataType: 'JSON',
    //   data: { Authorization: 'BxbFLnqfQNLnHx5EfYe1' }
    // }).success(result => {
    //   this.dispatch(result);
    // }).fail(error => {
    //   console.log('AJAX FAIL', error);
    //   // this.dispatch(error);
    // });
  }

  updateProfile(data){
    api_token = localStorage.api_token;
    $.ajax({
      url: `${BASE_URL}/api/user`,
      method: 'PUT',
      dataType: 'JSON',
      headers: { Authorization: api_token },
      data: { user: data }
    }).success(result => {
      this.dispatch(result);
    }).fail(error => {
      console.log('AJAX FAIL', error);
    });
  }

  login(user){
    // if(!email || !password){
    //   return toastr.error("Must include email and password");
    // }
    // if (savedJwt !== jwt) {
    //   var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';
    //
    //   RouterContainer.get().transitionTo(nextPath);
    //   localStorage.setItem('jwt', jwt);
    // }
    // location.pathname = '/'
    debugger;
    localStorage.setItem('api_token', user.user.auth_token);
    this.dispatch(user.user);
    // $.ajax({
    //   url: `${BASE_URL}/api/sessions`,
    //   method: 'POST',
    //   dataType: 'JSON',
    //   data: { session: { email, password }}
    // }).success(result => {
    //   console.log('success');
    //   localStorage.setItem('api_token', result.user.auth_token);
    //   this.dispatch(result);
    // }).fail(error => {
    //   console.log(error);
    //   toastr.error(error.statusText);
    // });
  }

  logout(){
    localStorage.setItem('api_token', '');
    window.location.pathname = '/';
    this.dispatch();
  }
}
export default alt.createActions(UserActions);
