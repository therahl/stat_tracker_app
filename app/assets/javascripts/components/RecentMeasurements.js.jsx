class RecentMeasurements extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(){
    console.log('Handle Delete');
  }
  render(){
    let tableData = [1,2,3,4,5,6];
    let tableRow = this.props.measurements.map(row => {
      let total = 0;
      Object.keys(row).forEach(key => {
        if(key !== 'weight' && key !== 'date' && key !== 'id' && key !== 'user_id'){
          total += row[key];
        }
      });
      return(
        <tr>
          <td>11/11/2015</td>
          <td>{row.weight}</td>
          <td>{row.neck}</td>
          <td>{row.shoulders}</td>
          <td>{row.bicep}</td>
          <td>{row.chest}</td>
          <td>{row.waist}</td>
          <td>{row.hips}</td>
          <td>{row.thigh}</td>
          <td>{row.calf}</td>
          <td>{total}</td>
          <td>
            <i className="fa fa-pencil"></i>
            <i onClick={this.handleDelete} className="fa fa-trash pull-right"></i>
          </td>
        </tr>);
    });
    return(
      <div>
        <div className="page-header">
          <h1 id="tables">Recent Measurements</h1>
        </div>
        <div className="bs-component">
          <table className="table table-responsive table-striped table-hover ">
            <thead>
              <tr>
                <th>Date</th>
                <th>Weight</th>
                <th>Neck</th>
                <th>Shoulders</th>
                <th>Bicep</th>
                <th>Chest</th>
                <th>Waist</th>
                <th>Hips</th>
                <th>Thigh</th>
                <th>Calf</th>
                <th>Total</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {tableRow}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
