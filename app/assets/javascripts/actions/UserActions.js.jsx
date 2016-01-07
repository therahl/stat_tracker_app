(() => {
  class UserActions {
    initialize(){
      $.ajax({
        url: `${BASE_URL}/api/user`,
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
      $.ajax({
        url: `${BASE_URL}/api/users/sign_in`,
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
        url: `${BASE_URL}/api/users/sign_out`,
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
  this.UserActions = alt.createActions(UserActions);
})();
