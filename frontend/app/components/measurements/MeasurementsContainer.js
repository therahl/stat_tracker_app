import React from 'react';
import WeightForm from './WeightForm';
import RecentMeasurements from './RecentMeasurements';
import PhotoBox from '../photos/PhotoBox';

class MeasurementsContainer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className="col-xs-12 col-md-6">
          <h1>Measurements</h1>
          <p>Add new measurement, view all past measurements in detail and view progress indicators, charts that show changes.</p>
          <WeightForm />
        </div>

        <div className="col-xs-12 col-md-6">
          <PhotoBox />
          <div className="well">cool charts here </div>
        </div>

        <div className="col-xs-12">
          <RecentMeasurements />
        </div>
      </div>
    );
  }
}
export default MeasurementsContainer;
