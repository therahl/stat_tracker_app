(() => {
  class SettingsActions {
    initialize(){
      $.ajax({
        url: `/settings`,
        method: 'GET',
        dataType: 'JSON',
      }).success(result => {
        this.dispatch(result);
      }).fail(error => {
        console.log('AJAX FAIL', error);
      });
    }
    updateSettings(id, settings){
      $.ajax({
        url: `/settings/${id}`,
        method: 'PUT',
        dataType: 'JSON',
        data: { settings: settings }
      }).success(result => {
        this.dispatch(result);
      }).fail(error => {
        console.log('AJAX FAIL', error);
      });
    }
  }
  this.SettingsActions = alt.createActions(SettingsActions);
})();