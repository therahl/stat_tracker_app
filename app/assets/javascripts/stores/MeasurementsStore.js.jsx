(() => {
  class MeasurementsStore {
    constructor() {
      this.measurements = [];

      this.bindListeners({
        handleUpdateMeasurements: MeasurementActions.updateMeasurements,
        addMeasurements: MeasurementActions.addMeasurements,
        deleteMeasurement: MeasurementActions.deleteMeasurement,
        updatePage: MeasurementActions.updatePage,
        initialize: MeasurementActions.initialize,
      });
    }
    initialize(resp){
      this.setState({...resp});
    }
    handleUpdateMeasurements(resp) {
      this.setState({...resp});
    }
    updatePage(resp){
      this.setState({...resp});
    }
    addMeasurements(resp) {
      this.setState({...resp});
    }
    deleteMeasurement(resp) {
      this.setState({...resp});
    }
  }

  this.MeasurementsStore = alt.createStore(MeasurementsStore, 'MeasurementsStore');
})();
