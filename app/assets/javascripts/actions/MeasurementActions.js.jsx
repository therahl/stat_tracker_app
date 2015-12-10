(() => {
  class MeasurementActions {
    initialize(){
      $.ajax({
        url: `/measurements`,
        method: 'GET',
        dataType: 'JSON',
      }).success(result => {
        debugger;
        this.dispatch(result);
      }).fail(error => {
        console.log('AJAX FAIL', error);
      });
    }
    updateMeasurements(measurements) {
      this.dispatch(measurements);
    }
    updatePage(page) {
      $.ajax({
        url: `/measurements`,
        method: 'GET',
        dataType: 'JSON',
        data: { page }
      }).success(result => {
        this.dispatch(result);
      }).fail(error => {
        console.log('AJAX FAIL', error);
      });
    }
    addMeasurements(id, measurements, callback){
      $.ajax({
        url: `/measurements`,
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
        url: `/measurements/${id}`,
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
  this.MeasurementActions = alt.createActions(MeasurementActions);
})();
