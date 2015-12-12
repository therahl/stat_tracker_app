class PhotoBox extends React.Component{
  constructor(props){
    super(props);
    PhotoActions.getPhotoBox();
    this.handleStateChange = this.handleStateChange.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.prevPhoto = this.prevPhoto.bind(this);
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
  nextPhoto(e){
    PhotoActions.getPhotoBox(this.state.angle, 'next');
  }
  prevPhoto(e){
    PhotoActions.getPhotoBox(this.state.angle, 'prev');
  }
  render(){
    if(!this.state){
      return(<div></div>)
    }
    return(
      <div className="well">
        <div className="photo-wrapper">
          <img className="img img-responsive pull-left" src={this.state.first} height="350" width="245" style={{marginRight: 5}}/>
          <h4 className="original-photo">Original</h4>
          <img className="img img-responsive" src={this.state.current} height="350" width="245" />
          <h4 className="current-photo">
            Current
            <span className="pull-right">
              <i onClick={this.prevPhoto} className="fa fa-chevron-left"></i>&nbsp;
              <i onClick={this.nextPhoto} className="fa fa-chevron-right"></i>
            </span>
          </h4>
        </div>
      </div>
    );
  }
}
