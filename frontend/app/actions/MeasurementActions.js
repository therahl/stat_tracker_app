import alt from '../alt';
import ApiService from '../services/ApiService';

const BASE_URL = 'http://localhost:3000';

class MeasurementActions {

  initialize(){
    ApiService.callApi('measurements', 'GET', {}, (result) => {return this.dispatch(result)});
  }
  updateMeasurements(measurements) {
    this.dispatch(measurements);
  }
  updatePage(page) {
    ApiService.callApi('measurements', 'GET', { page }, (result) => {return this.dispatch(result)});
  }
  addMeasurements(id, measurements, callback){
    ApiService.callApi('measurements', 'POST', { id, measurements }, (result) => { callback(); this.dispatch(result); } );
  }
  deleteMeasurement(id){
    let url = `measurements/${id}`;
    ApiService.callApi(url, 'DELETE', { id }, (result) => { this.dispatch(result) });
  }
}
export default alt.createActions(MeasurementActions);
