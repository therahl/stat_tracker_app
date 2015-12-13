(() => {
  class UserActions {
    initialize(){
      $.ajax({
        url: `/user`,
        method: 'GET',
        dataType: 'JSON',
      }).success(result => {
        this.dispatch(result);
      }).fail(error => {
        console.log('AJAX FAIL', error);
      });
    }
    updateProfile(data){
      $.ajax({
        url: `/user`,
        method: 'PUT',
        dataType: 'JSON',
        data: { user: data }
      }).success(result => {
        this.dispatch(result);
      }).fail(error => {
        console.log('AJAX FAIL', error);
      });
    }
  }
  this.UserActions = alt.createActions(UserActions);
})();
