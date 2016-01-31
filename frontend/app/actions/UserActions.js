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
    $.ajax({
      url: `${BASE_URL}/api/user`,
      method: 'PUT',
      dataType: 'JSON',
      data: { user: data }
    }).success(result => {
      this.dispatch(result);
    }).fail(error => {
      console.log('AJAX FAIL', error);
    });
  }

  login(email, password){
    if(!email || !password){
      return toastr.error("Must include email and password");
    }

    $.ajax({
      url: `${BASE_URL}/api/sessions`,
      method: 'POST',
      dataType: 'JSON',
      data: { session: { email, password }}
    }).success(result => {
      LocalStorage.set('api_token', result.user.auth_token);
      this.dispatch(result);
    }).fail(error => {
      toastr.error(error.statusText);
    });
  }

  logout(){
    $.ajax({
      url: `${BASE_URL}/api/sessions`,
      method: 'DELETE',
      dataType: 'JSON',
    }).success(result => {
      // window.location.pathname = '/';
      // redirect to root path with react router
      // delete token from local storage
      //EMPTY RESPONSE HERE
    }).fail(error => {
      console.log('AJAX FAIL', error);
    });
  }
}
export default alt.createActions(UserActions);
