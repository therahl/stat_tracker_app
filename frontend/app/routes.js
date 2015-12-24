import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import DashboardContainer from './components/dashboard/DashboardContainer';
import PhotoContainer from './components/photos/PhotoContainer';
import MeasurementsContainer from './components/measurements/MeasurementsContainer';
import Settings from './components/Settings';
import Login from './components/Login';

export default (
  <Route component={App}>
    <Route component={DashboardContainer} path='/' />
    <Route component={PhotoContainer} path='/photos'/>
    <Route component={MeasurementsContainer} path='/measurements'/>
    <Route component={Settings} path='/settings'/>
    <Route component={Login} path='/users/sign_in'/>
  </Route>
);
