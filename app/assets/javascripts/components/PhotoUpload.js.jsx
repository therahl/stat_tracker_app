class PhotoUpload extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.expandForm = this.expandForm.bind(this);
    this.photoClick = this.photoClick.bind(this);
    this.fileSelect = this.fileSelect.bind(this);
    this.progressHandlingFunction = this.progressHandlingFunction.bind(this);

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
    $(React.findDOMNode(e.currentTarget)).find('input').click();
  }
  fileSelect(e){
    // $(React.findDOMNode(this.refs.fileName)).val(e.target.files[0].name);
    debugger;
    let file = React.findDOMNode(e.target).files[0];
    let formData = new FormData();
    formData.append("file", file);
    $.ajax({
      url: `/photos`,
      method: 'POST',
      dataType: 'JSON',
      processData: false,
      contentType: false,
      xhr: () => {  // Custom XMLHttpRequest
            var myXhr = $.ajaxSettings.xhr();
            if(myXhr.upload){ // Check if upload property exists
                myXhr.upload.addEventListener('progress', this.progressHandlingFunction, false); // For handling the progress of the upload
            }
            return myXhr;
        },
      data: formData
    }).done(result => {
      // $(React.findDOMNode(this)).find('progress').hide();
      // $(React.findDOMNode(this.refs.fileName)).val('');
      // this.setState({agency_information: result.agency_information, address: result.address, edit: false});
      console.log('success!!');
    }).fail(err => {
      console.log(err);
    });
  }
  progressHandlingFunction(e){
    $(React.findDOMNode(this)).find('progress').show();
    if(e.lengthComputable){
      $('progress').attr({value:e.loaded, max:e.total});
    }
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
              <input onChange={this.fileSelect} type="file" style={{visibility: 'hidden'}} className="form-control" name="front" accept='image/*' />
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
