import alt from '../alt';
import MeasurementActions from '../actions/MeasurementActions';

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
    debugger;
    this.setState({...resp});
  }
  deleteMeasurement(resp) {
    this.setState({...resp});
  }
}

export default alt.createStore(MeasurementsStore);
