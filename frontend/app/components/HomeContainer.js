import React from 'react';
import { Link } from 'react-router';

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
          <section className="intro-section row">
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
              <Link to="/users/sign_up" className="btn btn-primary">Start Now</Link>
            </div>
          </section>
          <section className="features row">
            <div className="col-xs-12">
              Realtime Analytics
              Goal Tracking and Achievement forecasts
              Weekly Email reminders
              Convenient weight and body measurements

            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
