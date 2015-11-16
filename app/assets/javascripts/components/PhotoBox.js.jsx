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
          <h4 className="current-photo">Current</h4>
        </div>
      </div>
    );
  }
}
