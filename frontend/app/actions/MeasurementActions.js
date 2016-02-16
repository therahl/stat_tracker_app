import alt from '../alt';
import ApiService from '../services/ApiService';

const BASE_URL = 'http://localhost:3000';

class MeasurementActions {

  initialize(){
    // $.ajax({
    //   url: `${BASE_URL}/api/measurements`,
    //   method: 'GET',
    //   dataType: 'JSON',
    // }).success(result => {
    //   this.dispatch(result);
    // }).fail(error => {
    //   console.log('AJAX FAIL', error);
    // });
  }
  updateMeasurements(measurements) {
    this.dispatch(measurements);
  }
  updatePage(page) {
    ApiService.callApi('measurements', 'GET', { page }, function(result){return this.dispatch(result)})
  //
  //   $.ajax({
  //     url: `${BASE_URL}/api/measurements`,
  //     method: 'GET',
  //     dataType: 'JSON',
  //     data: { page }
  //   }).success(result => {
  //     this.dispatch(result);
  //   }).fail(error => {
  //     console.log('AJAX` FAIL', error);
  //   });
  }
  addMeasurements(id, measurements, callback){
    $.ajax({
      url: `${BASE_URL}/api/measurements`,
      method: 'POST',
      dataType: 'JSON',
      data: { id, measurements }
    }).success(result => {
      callback();
      this.dispatch(result);
    }).fail(error => {
      console.log('AJAX FAIL', error);
    });
  }
  deleteMeasurement(id){
    $.ajax({
      url: `${BASE_URL}/api/measurements/${id}`,
      method: 'DELETE',
      dataType: 'JSON',
      data: { id }
    }).success(result => {
      this.dispatch(result);
    }).fail(error => {
      console.log('AJAX FAIL', error);
    });
  }
}
export default alt.createActions(MeasurementActions);
