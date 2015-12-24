import React from 'react';

class StatsPanel extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">
            Statistics <span className="pull-right"><i className="fa fa-flask"></i></span>
          </h3>
        </div>
        <div className="panel-body">
          <h5> Weight growth rate: <span className="pull-right">4 lbs monthly</span> </h5>
          <h5> Target weight forecast: <span className="pull-right">22 weeks</span> </h5>
          <h5> Strength growth rate: <span className="pull-right">10 lbs weekly</span> </h5>
        </div>
      </div>
    );
  }
}
export default StatsPanel;
