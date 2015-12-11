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
  }
  this.UserActions = alt.createActions(UserActions);
})();
