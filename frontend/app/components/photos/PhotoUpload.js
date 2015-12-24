import React from 'react';

class PhotoUpload extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.expandForm = this.expandForm.bind(this);
    this.photoClick = this.photoClick.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
    this.progressHandlingFunction = this.progressHandlingFunction.bind(this);
    this.photos = [];
    this.state = { expanded: false };
  }
  handleSubmit(e){
    e.preventDefault();
    let form = new FormData();
    form.append('photos[]', React.findDOMNode(this.refs.front).files[0]);
    form.append('photos[]', React.findDOMNode(this.refs.side).files[0]);
    form.append('photos[]', React.findDOMNode(this.refs.back).files[0]);
    form.append('photos[]', React.findDOMNode(this.refs.other).files[0]);
    form.append('date', this.refs.date.value);
    PhotoActions.uploadPhotos(form, () => this.setState({ expanded: false }));
  }
  expandForm(){
    this.setState({expanded: !this.state.expanded})
  }
  photoClick(e){
    $(React.findDOMNode(e.currentTarget)).find('input').click();
  }
  addPhoto(e){
    let file = React.findDOMNode(e.target).files[0];
    let formData = new FormData();
    console.log(file);
    formData.append("file", file);
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      var element = e.target
      reader.onload = function (e) {
        $(React.findDOMNode(element)).first().siblings('.photo-upload-placeholder').hide();
        $(React.findDOMNode(element)).first().siblings('img').attr('src', e.target.result);
      }
      reader.readAsDataURL(e.target.files[0]);
    }
    this.photos.push({angle: e.target.name, photo: formData});
    console.log(this.photos);
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
          <legend onClick={this.expandForm} style={{cursor: 'pointer'}}>
            <span className="fa-stack fa-lg" style={{fontSize: 'initial'}}>
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
        <form onSubmit={this.handleSubmit} ref="photosForm" className="form-inline">
          <fieldset>
            <legend onClick={this.expandForm} style={{cursor: 'pointer'}}>
              <span className="fa-stack fa-lg" style={{fontSize: 'initial'}}>
                <i className="fa fa-stack-2x fa-circle" style={{color: '#333333'}}></i>
                <i className="fa fa-stack-1x fa-minus fa-inverse"></i>
              </span>
               Add New Photoset
            </legend>
            <div className="col-xs-12 col-md-3 add-photo text-center" onClick={this.photoClick}>
              <img src="" className="photo-preview"></img>
              <span className="photo-upload-placeholder">
                Front<br />
                <i className="fa fa-plus"></i>
              </span>
              <input onChange={this.addPhoto} type="file" style={{visibility: 'hidden'}} className="form-control" ref="front" name="front" accept='image/*' />
            </div>
            <div className="col-xs-12 col-md-3 add-photo text-center" onClick={this.photoClick}>
              <img src="" className="photo-preview"></img>
              <span className="photo-upload-placeholder">
                Side<br />
                <i className="fa fa-plus"></i>
              </span>
              <input onChange={this.addPhoto} type="file" style={{visibility: 'hidden'}} className="form-control" ref="side" name="side" accept='image/*' />
            </div>
            <div className="col-xs-12 col-md-3 add-photo text-center" onClick={this.photoClick}>
              <img src="" className="photo-preview"></img>
              <span className="photo-upload-placeholder">
                Back<br />
                <i className="fa fa-plus"></i>
              </span>
              <input onChange={this.addPhoto} type="file" style={{visibility: 'hidden'}} className="form-control" ref="back" name="back" accept='image/*' />
            </div>
            <div className="col-xs-12 col-md-3 add-photo text-center" onClick={this.photoClick}>
              <img src="" className="photo-preview"></img>
              <span className="photo-upload-placeholder">
                Other<br />
                <i className="fa fa-plus"></i>
              </span>
              <input onChange={this.addPhoto} type="file" style={{visibility: 'hidden'}} className="form-control" ref="other" name="other" accept='image/*' />
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
export default PhotoUpload;
