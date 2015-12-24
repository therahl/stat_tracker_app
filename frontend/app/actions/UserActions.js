import alt from '../alt';

class UserActions {
  initialize(){
    $.ajax({
      url: `api/v1/user`,
      method: 'GET',
      dataType: 'JSON',
    }).success(result => {
      this.dispatch(result);
    }).fail(error => {
      console.log('AJAX FAIL', error);
      // this.dispatch(error);
    });
  }
  updateProfile(data){
    $.ajax({
      url: `api/v1/user`,
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
    $.ajax({
      url: `api/v1/users/sign_in`,
      method: 'POST',
      dataType: 'JSON',
      data: { user: { email, password }}
    }).success(result => {
      window.location.pathname = '/';
      this.dispatch(result);
    }).fail(error => {
      console.log('AJAX FAIL', error);
    });
  }
  logout(){
    $.ajax({
      url: `api/v1/users/sign_out`,
      method: 'DELETE',
      dataType: 'JSON',
    }).success(result => {
      window.location.pathname = '/';
      //EMPTY RESPONSE HERE
    }).fail(error => {
      console.log('AJAX FAIL', error);
    });
  }
}
export default alt.createActions(UserActions);
