import alt from '../alt';
import API from '../services/ApiService';

class SettingsActions {

  initialize(){
    API.callApi('settings', 'GET', {}, (result) => { this.dispatch(result) });
  }
  updateSettings(id, settings){
    const url = `settings/${id}`;
    API.callApi(url, 'PUT', { settings }, (result) => { this.dispatch(result) });
    // $.ajax({
    //   url: `${BASE_URL}/api/settings/${id}`,
    //   method: 'PUT',
    //   dataType: 'JSON',
    //   data: { settings: settings }
    // }).success(result => {
    //   this.dispatch(result);
    // }).fail(error => {
    //   console.log('AJAX FAIL', error);
    // });
  }
}
// this.SettingsActions = alt.createActions(SettingsActions);

export default alt.createActions(SettingsActions);
