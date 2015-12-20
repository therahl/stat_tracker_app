class PhotoTable extends React.Component {
  constructor(props){
    super(props);
    PhotoActions.photoTable();
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = PhotosStore.getState();
  }
  componentDidMount() {
    PhotosStore.listen(this.handleStateChange);
  }
  componentWillUnmount() {
    PhotosStore.unlisten(this.handleStateChange);
  }
  handleStateChange(state) {
    this.setState(state);
  }
  handleDelete(){
    console.log('Handle Delete');
  }
  render(){
    if(!this.state.photos)
      return(<div></div>);
    debugger;
    let tableData = [1,2,3,4,5,6];
    let tableRow = this.state.photos.map(photo => {
      return(
        <tr>
          <td>{photo.date}</td>
          <td><img src={photo.front.url || ''}/></td>
          <td><img src={photo.back.url || ''}/></td>
          <td><img src={photo.side.url || ''}/></td>
          <td><img src={photo.other.url || ''}/></td>
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
