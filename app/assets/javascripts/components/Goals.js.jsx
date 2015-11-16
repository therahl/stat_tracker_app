class Goals extends React.Component{
  constructor(props){
    super(props);
  //   this.state = GoalStore.getState();
  //
  //   this.handleViewChange = (state) => {
  //     this.setState(state);
  //   }
  // }
  //
  // componentWillMount() {
  //   NameStore.listen(this.handleViewChange);
  // }
  //
  // componentWillUnmount() {
  //   NameStore.unlisten(this.handleViewChange);
  }

  render(){
    return(
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">
            Goals <span className="pull-right"><i className="fa fa-flag-checkered"></i></span>
          </h3>
        </div>
        <div className="panel-body">
          <h5>
            Current Weight: <span className="pull-right">174 lbs</span>
          </h5>
          <h5>
            Target Weight: <span className="pull-right">194 lbs</span>
          </h5>
        </div>
      </div>
    );
  }
}
