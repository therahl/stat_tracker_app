class PhotoUpload extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.expandForm = this.expandForm.bind(this);
    this.photoClick = this.photoClick.bind(this);
    this.state = { expanded: false };
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('handleSubmit');
    let data = {
      angle: this.refs.angle
    };
    $.ajax({
      url: '/photos',
      method: 'PUT',
      data: { photos: data }
    }).success(result => {
      console.log('success');

    }).fail(err => {
      console.log(err);
    })
  }
  expandForm(){
    this.setState({expanded: !this.state.expanded})
  }
  photoClick(e){
    console.log(e.target);
    $(React.findDOMNode(this.refs.front)).click();
  }
  render(){
    if(!this.state.expanded){
      return(
        <div className="well">
          <legend>
            <span onClick={this.expandForm} className="fa-stack fa-lg" style={{fontSize: 'initial'}}>
              <i className="fa fa-stack-2x fa-circle" style={{color: '#333333'}}></i>
              <i className="fa fa-stack-1x fa-plus fa-inverse"></i>
            </span>
             Add New Photoset
          </legend>
        </div>
      );
    }
    return(
      <div className="well">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <fieldset>
            <legend>
              <span onClick={this.expandForm} className="fa-stack fa-lg" style={{fontSize: 'initial'}}>
                <i className="fa fa-stack-2x fa-circle" style={{color: '#333333'}}></i>
                <i className="fa fa-stack-1x fa-minus fa-inverse"></i>
              </span>
               Add New Photoset
            </legend>
            <div className="col-xs-12 col-md-3 add-photo text-center" onClick={this.photoClick}>
              Front<br />
              <i className="fa fa-plus"></i>
              <input type="file" ref="front" className="form-control" name="front" />
            </div>
            <div className="col-xs-12 col-md-3 add-photo text-center">
              Side<br />
              <i className="fa fa-plus"></i>
            </div>
            <div className="col-xs-12 col-md-3 add-photo text-center">
              Back<br />
              <i className="fa fa-plus"></i>
            </div>
            <div className="col-xs-12 col-md-3 add-photo text-center">
              Other<br />
              <i className="fa fa-plus"></i>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Date</label>
              <div className="col-xs-10">
                <input ref='date' type="Date" className="form-control" id="inputDate" placeholder="mm/dd/yyyy" required="required" />
              </div>
            </div>
            <div className="form-group">
              <div>
                <button type="reset" className="btn btn-default">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
