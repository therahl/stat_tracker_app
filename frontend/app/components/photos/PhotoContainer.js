import React from 'react';
import PhotoBox from './PhotoBox';
import PhotoUpload from './PhotoUpload';
import PhotoTable from './PhotoTable';

class PhotoContainer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className="col-xs-12 col-md-6">
          <h1>Photos</h1>
          <p>Upload new photos.  The app will use you first photo and most recent photo in the box for a side by side comparison.</p>
        </div>
        <div className="col-xs-12 col-md-6">
          <PhotoBox />
        </div>
        <div className="col-xs-12">
          <PhotoUpload />
        </div>
        <div className="col-xs-12">
          <PhotoTable />
        </div>
      </div>
    );
  }
}
export default PhotoContainer;
