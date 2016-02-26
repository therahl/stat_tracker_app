import React from 'react';
import {Link} from 'react-router';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className=''>
        <div className="home-styles">
          <section className="home-section row">
            <div className="col-md-6">
              Demo image here
            </div>
            <div className="col-md-6">
              <h2>FitnessTracker</h2>
              <h1>Take your fitness to the next level</h1>
              <p>
                Use our fitness tracking tools to stay on top of your fitness progress.
                Use our fitness tracking tools to stay on top of your fitness progress.
                Use our fitness tracking tools to stay on top of your fitness progress.
                Use our fitness tracking tools to stay on top of your fitness progress.
                Use our fitness tracking tools to stay on top of your fitness progress.
                Use our fitness tracking tools to stay on top of your fitness progress.
              </p>
              <button className="btn btn-primary">Start Now</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
