import React from 'react';
import {Link} from 'react-router';

import Goals from '../Goals';
import StatsPanel from '../StatsPanel';
import RecentMeasurements from '../measurements/RecentMeasurements';


class DashboardContainer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className="col-xs-8">
          <h1>Stat Tracker</h1>
          <p>Record weekly measurements and track wieght change over time with our tools. Set weight goals to track your progress.</p>
          <Link to="/measurements" className="btn btn-success">New Measurement</Link>
          <a href="#" className="btn btn-primary">Update Photos</a>
          <a href="#" className="btn btn-primary">Record Strength</a>
        </div>
        <div className="col-xs-4">
          <Goals />
          <StatsPanel />
        </div>
        <div className="col-xs-12">
          <RecentMeasurements />
        </div>

      </div>
    );
  }
}
export default DashboardContainer;
