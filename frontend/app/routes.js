import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import DashboardContainer from './components/dashboard/DashboardContainer';
import PhotoContainer from './components/photos/PhotoContainer';
import MeasurementsContainer from './components/measurements/MeasurementsContainer';
import Settings from './components/Settings';
import Login from './components/Login';
// import requireAuth from './components/AuthenticatedComponent';
import UserStore from './stores/UserStore';
import auth from './services/authService';

const requireAuth = (nextState, replace) => {
  if (!auth.isLoggedIn()) {
    // replace({
    //     pathname: '/login',
    //     state: { nextPathname: nextState.location.pathname }
    //   })
    replace(
      { nextPathname: nextState.location.pathname },
      '/users/sign_in'
    )
  }
}

export default (
  <Route component={App}>
    <Route component={DashboardContainer} path='/' />
    <Route component={PhotoContainer} path='/photos' onEnter={requireAuth} />
    <Route component={MeasurementsContainer} path='/measurements' onEnter={requireAuth} />
    <Route component={Settings} path='/settings' onEnter={requireAuth} />
    <Route component={Login} path='/users/sign_in' />
  </Route>
);
