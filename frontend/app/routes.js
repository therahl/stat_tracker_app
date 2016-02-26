import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import DashboardContainer from './components/dashboard/DashboardContainer';
import PhotoContainer from './components/photos/PhotoContainer';
import MeasurementsContainer from './components/measurements/MeasurementsContainer';
import Settings from './components/Settings';
import Login from './components/Login';
import HomeContainer from './components/HomeContainer';
// import requireAuth from './components/AuthenticatedComponent';
import UserStore from './stores/UserStore';
import auth from './services/authService';

const requireAuth = (nextState, replace) => {
  if (!auth.isLoggedIn()) {
    replace(
      { nextPathname: nextState.location.pathname },
      '/users/sign_in'
    )
  }
}

export default (
  <Route component={App}>
    <Route component={HomeContainer} path='/' />
    <Route component={DashboardContainer} path='/dashboard' onEnter={requireAuth} />
    <Route component={PhotoContainer} path='/photos' onEnter={requireAuth} />
    <Route component={MeasurementsContainer} path='/measurements' onEnter={requireAuth} />
    <Route component={Settings} path='/settings' onEnter={requireAuth} />
    <Route component={Login} path='/users/sign_in' />
    <Route component={DashboardContainer} path='*' />
  </Route>
);
