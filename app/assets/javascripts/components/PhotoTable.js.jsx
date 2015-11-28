class PhotoTable extends React.Component {
  constructor(props){
    super(props);
  }
  handleDelete(){
    console.log('Handle Delete');
  }
  render(){
    let tableData = [1,2,3,4,5,6];
    let tableRow = tableData.map(row => {
      return(
        <tr>
          <td>11/11/2015</td>
          <td>front</td>
          <td>photo data</td>
          <td>photo data</td>
          <td>photo data</td>
          <td>photo data</td>
          <td>photo data</td>
          <td>
            <i className="fa fa-pencil"></i>
            <i onClick={this.handleDelete} className="fa fa-trash pull-right"></i>
          </td>
        </tr>);
    });
    return(
      <div className="">
        <div className="page-header">
          <h1 id="tables">All Photos</h1>
        </div>
        <div className="bs-component">
          <table className="table table-responsive table-striped table-hover ">
            <thead>
              <tr>
                <th>Date</th>
                <th>Front</th>
                <th>Side</th>
                <th>Back</th>
                <th>Other</th>
                <th>Original</th>
                <th>Current</th>
                <th>Actions</th>
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
