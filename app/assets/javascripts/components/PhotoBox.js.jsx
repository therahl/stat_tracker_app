class PhotoBox extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="well">
        <div className="photo-wrapper">
          <img src={this.props.first} height="350" width="245" style={{marginRight: 5}}/>
          <h4 className="original-photo">Original</h4>
          <img src={this.props.current} height="350" width="245" />
          <h4 className="current-photo">
            Current
            <span className="pull-right">
              <i className="fa fa-chevron-left"></i>&nbsp;
              <i className="fa fa-chevron-right"></i>
            </span>
          </h4>
        </div>
      </div>
    );
  }
}
