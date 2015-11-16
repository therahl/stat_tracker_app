class PhotoUpload extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){
    console.log('handleSubmit');
    let data = {
      angle: this.refs.angle
    }
    $.ajax({
      url: '/photos',
      method: 'POST',
      data: { photos: data }
    }).success(result => {
      console.log('success');

    }).fail(error => {
      console.log(error);
    })
  }

  render(){
    return(
      <div className="well">
        <form onSubmit={this.handleSubmit} className="form-horizontal">
          <fieldset>
            <legend>Add New Photo</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Date</label>
              <div className="col-xs-10">
                <input ref='date' type="Date" className="form-control" id="inputDate" placeholder="mm/dd/yyyy" required="required" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Angle</label>
              <div className="col-xs-10">
                <select ref="angle" className="form-control">
                  <option>Front</option>
                  <option>Side</option>
                  <option>Back</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Photo</label>
              <div className="col-xs-10">
                <input type="file" className="form-control" required="required" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="reset" className="btn btn-default">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>    );
  }
}
