(() => {
  class MeasurementsStore {
    constructor() {
      this.measurements = [];

      this.bindListeners({
        handleUpdateMeasurements: MeasurementActions.updateMeasurements,
        addMeasurements: MeasurementActions.addMeasurements,
        deleteMeasurement: MeasurementActions.deleteMeasurement,
        initialize: MeasurementActions.initialize,
      });
    }
    initialize(resp){
      this.setState({measurements: resp.measurements, user_id: resp.user_id});
    }
    handleUpdateMeasurements(measurements) {
      this.setState({measurements});
    }
    addMeasurements(measurements) {
      this.setState({measurements});
    }
    deleteMeasurement(measurements) {
      this.setState({measurements});
    }
  }

  this.MeasurementsStore = alt.createStore(MeasurementsStore, 'MeasurementsStore');
})();
