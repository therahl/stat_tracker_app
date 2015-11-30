class RecentMeasurements extends React.Component{
  constructor(props){
    super(props);
    MeasurementActions.initialize();
    this.handleDelete = this.handleDelete.bind(this);
    this.changePage = this.changePage.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = MeasurementsStore.getState();
  }
  componentDidMount() {
    MeasurementsStore.listen(this.handleStateChange);
  }
  componentWillUnmount() {
    MeasurementsStore.unlisten(this.handleStateChange);
  }
  handleStateChange(state) {
    this.setState(state);
  }
  handleDelete(e){
    let id = $(React.findDOMNode(e.target)).attr('name');
    MeasurementActions.deleteMeasurement(id);
  }
  changePage(page){
    MeasurementActions.updatePage(page);
  }
  render(){
    let pagination = this.state.total_pages > 1 ? (<Paginator max={this.state.total_pages} current={this.state.current_page} handleChange={this.changePage} />) : '';
    let tableRow = this.state.measurements.map(row => {
      return(
        <tr key={row.id}>
          <td>{row.date}</td>
          <td>{row.weight}</td>
          <td>{row.neck}</td>
          <td>{row.shoulders}</td>
          <td>{row.bicep}</td>
          <td>{row.chest}</td>
          <td>{row.waist}</td>
          <td>{row.hips}</td>
          <td>{row.thigh}</td>
          <td>{row.calf}</td>
          <td>{row.total}</td>
          <td>
            <i className="fa fa-pencil"></i>
            <i name={row.id} onClick={this.handleDelete} className="fa fa-trash pull-right"></i>
          </td>
        </tr>);
    });
    return(
      <div>
        <div className="page-header">
          <h1>Recent Measurements</h1>
        </div>
        <div className="bs-component">
          <table className="table table-responsive table-striped table-hover ">
            <thead>
              <tr>
                <th>Date</th>
                <th>Weight ({this.state.weight_units})</th>
                <th>Neck ({this.state.girth_units})</th>
                <th>Shoulders ({this.state.girth_units})</th>
                <th>Bicep ({this.state.girth_units})</th>
                <th>Chest ({this.state.girth_units})</th>
                <th>Waist ({this.state.girth_units})</th>
                <th>Hips ({this.state.girth_units})</th>
                <th>Thigh ({this.state.girth_units})</th>
                <th>Calf ({this.state.girth_units})</th>
                <th>Total ({this.state.girth_units})</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {tableRow}
            </tbody>
          </table>
          {pagination}
        </div>
      </div>
    );
  }
}
