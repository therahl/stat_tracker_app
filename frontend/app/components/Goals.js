import React from 'react';

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
          <p className="pull-right">Current / Target</p>
          <div className="clearfix"></div>
          <p>
            Weight: <span className="pull-right">174/190 lbs</span>
          </p>
          <p>
            Girth: <span className="pull-right">205/194 cm</span>
          </p>
        </div>
      </div>
    );
  }
}
export default Goals;
